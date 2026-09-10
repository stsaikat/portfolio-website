// Fetches the Medium RSS feed at build time and writes a static JSON file
// into public/, so the Blogs page reads a same-origin file at runtime
// instead of depending on a third-party proxy (Medium's feed has no CORS
// headers, which is why the old client-side code went through
// api.rss2json.com). Failing here shouldn't break the whole site build, so
// a fetch error just leaves the previous JSON (or an empty list) in place.
import { XMLParser } from 'fast-xml-parser';
import { writeFile, readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outFile = path.join(__dirname, '..', 'public', 'blog-posts.json');

const mediumUsername = '@talukdersunipun';
const feedUrl = `https://medium.com/feed/${mediumUsername}`;

function extractImage(html) {
    const match = typeof html === 'string' && html.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
}

async function main() {
    try {
        const res = await fetch(feedUrl);
        if (!res.ok) throw new Error(`Medium feed returned ${res.status}`);
        const xml = await res.text();

        const parser = new XMLParser({ ignoreAttributes: false, cdataPropName: '__cdata' });
        const data = parser.parse(xml);
        const items = [].concat(data?.rss?.channel?.item ?? []);

        const posts = items.map((item) => {
            const content = item['content:encoded']?.__cdata ?? item['content:encoded'] ?? '';
            return {
                title: item.title?.__cdata ?? item.title ?? '',
                link: item.link ?? '',
                pubDate: item.pubDate ?? '',
                thumbnail: extractImage(content),
            };
        });

        await writeFile(outFile, JSON.stringify(posts, null, 2));
        console.log(`Wrote ${posts.length} blog post(s) to public/blog-posts.json`);
    } catch (err) {
        console.warn(`Skipping blog post fetch (${err.message}); keeping existing public/blog-posts.json if present.`);
        try {
            await readFile(outFile);
        } catch {
            await writeFile(outFile, '[]');
        }
    }
}

main();
