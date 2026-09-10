// Fetches live competitive-programming stats at build time so the CP page
// never drifts out of date the way the old hardcoded numbers did (CodeChef
// "Problems Solved" was off by more than 2x). Each platform is fetched
// independently and a failure only affects that platform's entry — it falls
// back to whatever is already in public/cp-stats.json rather than failing
// the build or wiping out the other two platforms' data.
import { writeFile, readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outFile = path.join(__dirname, '..', 'public', 'cp-stats.json');

const HANDLES = {
    codeforces: 'stsaikat',
    codechef: 'thestsaikat',
    leetcode: 'sunipun',
};

async function fetchCodeforces(handle) {
    const [infoRes, ratingRes, statusRes] = await Promise.all([
        fetch(`https://codeforces.com/api/user.info?handles=${handle}`),
        fetch(`https://codeforces.com/api/user.rating?handle=${handle}`),
        fetch(`https://codeforces.com/api/user.status?handle=${handle}&from=1&count=10000`),
    ]);
    const info = await infoRes.json();
    const rating = await ratingRes.json();
    const status = await statusRes.json();
    if (info.status !== 'OK' || rating.status !== 'OK' || status.status !== 'OK') {
        throw new Error('Codeforces API returned non-OK status');
    }

    const user = info.result[0];
    const solved = new Set();
    for (const sub of status.result) {
        if (sub.verdict === 'OK') {
            solved.add(`${sub.problem.contestId}-${sub.problem.index}`);
        }
    }

    return {
        maxRating: user.maxRating,
        rank: user.maxRank,
        problemsSolved: solved.size,
        contests: rating.result.length,
        profileUrl: `https://codeforces.com/profile/${handle}`,
    };
}

async function fetchCodeChef(handle) {
    const res = await fetch(`https://www.codechef.com/users/${handle}`, {
        headers: { 'User-Agent': 'Mozilla/5.0' },
    });
    if (!res.ok) throw new Error(`CodeChef returned ${res.status}`);
    const html = await res.text();

    const ratingMatch = html.match(/var all_rating\s*=\s*(\[.*?\]);/s);
    if (!ratingMatch) throw new Error('Could not find CodeChef rating data');
    const ratingHistory = JSON.parse(ratingMatch[1]);
    const maxRating = Math.max(...ratingHistory.map((r) => parseInt(r.rating, 10)));
    const currentRating = parseInt(ratingHistory[ratingHistory.length - 1].rating, 10);

    const solvedMatch = html.match(/Total Problems Solved:\s*(\d+)/);
    if (!solvedMatch) throw new Error('Could not find CodeChef problems-solved count');

    // The star badge on the profile page reflects current rating, not max —
    // pairing it with maxRating would misrepresent the star tier.
    const starBlockMatch = html.match(/rating-star">([\s\S]*?)<\/div>/);
    const currentStars = starBlockMatch ? (starBlockMatch[1].match(/&#9733;/g) || []).length : null;

    return {
        maxRating,
        currentRating,
        currentStars,
        problemsSolved: parseInt(solvedMatch[1], 10),
        contests: ratingHistory.length,
        profileUrl: `https://www.codechef.com/users/${handle}`,
    };
}

async function fetchLeetCode(username) {
    const res = await fetch('https://leetcode.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Referer: `https://leetcode.com/${username}/`,
            'User-Agent': 'Mozilla/5.0',
        },
        body: JSON.stringify({
            query: `query userPublicProfile($username: String!) {
                matchedUser(username: $username) {
                    submitStats { acSubmissionNum { difficulty count } }
                    profile { ranking }
                    badges { displayName }
                }
            }`,
            variables: { username },
        }),
    });
    if (!res.ok) throw new Error(`LeetCode GraphQL returned ${res.status}`);
    const { data } = await res.json();
    const user = data?.matchedUser;
    if (!user) throw new Error('LeetCode user not found in response');

    const totalSolved = user.submitStats.acSubmissionNum.find((s) => s.difficulty === 'All')?.count ?? 0;

    return {
        problemsSolved: totalSolved,
        badges: user.badges.length,
        ranking: user.profile.ranking,
        profileUrl: `https://leetcode.com/${username}/`,
    };
}

async function main() {
    let existing = {};
    try {
        existing = JSON.parse(await readFile(outFile, 'utf-8'));
    } catch {
        // no existing file yet, that's fine
    }

    const fetchers = { codeforces: fetchCodeforces, codechef: fetchCodeChef, leetcode: fetchLeetCode };
    const result = { ...existing };

    for (const [platform, fetcher] of Object.entries(fetchers)) {
        try {
            result[platform] = await fetcher(HANDLES[platform]);
            console.log(`Fetched ${platform} stats`);
        } catch (err) {
            console.warn(`Skipping ${platform} stats (${err.message}); keeping previous value if any.`);
        }
    }

    await writeFile(outFile, JSON.stringify(result, null, 2));
}

main();
