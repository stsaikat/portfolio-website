// Platform cards for the Competitive Programming page. `stats` maps a label to a
// reader over the matching key in public/cp-stats.json, which the build refreshes.

const rankOf = (value) => (typeof value === 'number' ? `#${value.toLocaleString()}` : null);

export const platforms = [
    {
        key: 'codeforces',
        name: 'Codeforces',
        handle: '@stsaikat',
        icon: 'Code',
        url: 'https://codeforces.com/profile/stsaikat',
        stats: [
            { label: 'Max Rating', read: (d) => d.maxRating },
            { label: 'Problems Solved', read: (d) => d.problemsSolved },
            { label: 'Contests', read: (d) => d.contests },
        ],
    },
    {
        key: 'codechef',
        name: 'CodeChef',
        handle: '@thestsaikat',
        icon: 'Award',
        url: 'https://www.codechef.com/users/thestsaikat',
        stats: [
            { label: 'Max Rating', read: (d) => d.maxRating },
            { label: 'Problems Solved', read: (d) => d.problemsSolved },
            { label: 'Contests', read: (d) => d.contests },
        ],
    },
    {
        key: 'leetcode',
        name: 'LeetCode',
        handle: '@sunipun',
        icon: 'CheckCircle',
        url: 'https://leetcode.com/sunipun/',
        stats: [
            { label: 'Problems Solved', read: (d) => d.problemsSolved },
            { label: 'Badges', read: (d) => d.badges },
            { label: 'Global Rank', read: (d) => rankOf(d.ranking) },
        ],
    },
    {
        key: 'toph',
        name: 'Toph',
        handle: '@thestsaikat',
        icon: 'Trophy',
        url: 'https://toph.co/u/thestsaikat',
        stats: [
            { label: 'Rating', read: (d) => d.rating },
            { label: 'Problems Solved', read: (d) => d.problemsSolved },
            { label: 'Rank', read: (d) => rankOf(d.rank) },
        ],
    },
    {
        key: 'lightoj',
        name: 'LightOJ',
        handle: '@thestsaikat',
        icon: 'Lightbulb',
        url: 'https://lightoj.com/user/thestsaikat',
        stats: [
            { label: 'Problems Solved', read: (d) => d.problemsSolved },
            { label: 'Problems Tried', read: (d) => d.tried },
        ],
    },
    {
        key: 'uhunt',
        name: 'uHunt',
        handle: '@stsaikat_SUST',
        icon: 'Target',
        url: 'https://uhunt.onlinejudge.org/id/819609',
        stats: [
            { label: 'Problems Solved', read: (d) => d.problemsSolved },
            { label: 'Submissions', read: (d) => d.submissions },
            { label: 'Rank', read: (d) => rankOf(d.rank) },
        ],
    },
];

export const competencies = [
    {
        level: 'Advanced',
        topics: ['Dynamic Programming', 'Divide and Conquer', 'Backtracking', 'Union Find', 'Trie', 'Monotonic Stack', 'Data Stream', 'Topological Sort'],
    },
    {
        level: 'Intermediate',
        topics: ['Hash Table', 'Depth-First Search', 'Tree', 'Binary Tree', 'Math', 'Breadth-First Search', 'Greedy', 'Binary Search'],
    },
    {
        level: 'Fundamental',
        topics: ['Array', 'String', 'Two Pointers', 'Sorting', 'Linked List', 'Stack', 'Matrix', 'Simulation'],
    },
];
