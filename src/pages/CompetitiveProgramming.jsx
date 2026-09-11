import { useEffect, useState } from 'react';
import { Code, Award, CheckCircle, Trophy, Lightbulb, Target } from 'lucide-react';
import Seo from '../components/Seo';
import site from '../data/site';
import { platforms, competencies } from '../data/cp';
import '../styles/shared.css';
import '../styles/competitive_programming.css';

const ICONS = { Code, Award, CheckCircle, Trophy, Lightbulb, Target };

const CompetitiveProgramming = () => {
    const [stats, setStats] = useState(null);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        let cancelled = false;

        fetch('/cp-stats.json')
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((data) => !cancelled && setStats(data))
            .catch((err) => {
                if (cancelled) return;
                console.error('Error loading CP stats:', err);
                setFailed(true);
            });

        return () => {
            cancelled = true;
        };
    }, []);

    const totalSolved = platforms
        .map((platform) => stats?.[platform.key]?.problemsSolved)
        .filter((n) => typeof n === 'number')
        .reduce((sum, n) => sum + n, 0);

    return (
        <div className="cp-page">
            <Seo
                title={`Competitive Programming - ${site.name}`}
                description="Competitive programming profiles and results across Codeforces, LeetCode, CodeChef, Toph, LightOJ and UVa (uHunt)."
                path="/cp"
            />
            <section className="section cp-hero">
                <div className="container">
                    <h1 className="section-title">Competitive Programming</h1>
                    <p className="text-center mb-4">
                        Problem solving and algorithmic challenges across various platforms
                    </p>
                </div>
            </section>

            <section className="section cp-profiles">
                <div className="container">
                    {failed && (
                        <p className="error-alert" role="alert">
                            Live stats are unavailable right now — the profile links below still work.
                        </p>
                    )}
                    <div className="grid grid-3">
                        {platforms.map((platform) => {
                            const Icon = ICONS[platform.icon];
                            const data = stats?.[platform.key];

                            return (
                                <div className="cp-card" key={platform.key}>
                                    <div className="cp-card-header">
                                        <Icon size={40} color="white" aria-hidden="true" style={{ marginBottom: '1rem' }} />
                                        <h2>{platform.name}</h2>
                                        <p className="handle">{platform.handle}</p>
                                    </div>
                                    <div className="cp-card-body">
                                        <ul className="cp-stats">
                                            {platform.stats.map(({ label, read }) => (
                                                <li key={label}>
                                                    <span className="stat-label">{label}</span>
                                                    <span className="stat-value">
                                                        {(data && read(data)) ?? '—'}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                        <a
                                            href={platform.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary"
                                        >
                                            View Profile
                                            <span className="sr-only"> on {platform.name}</span>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="section achievements-section">
                <div className="container">
                    <h2 className="section-title">Notable Achievements</h2>
                    <div className="grid grid-2">
                        <div className="achievement-card">
                            <div className="achievement-card-body">
                                <Award size={32} color="var(--secondary-color)" aria-hidden="true" style={{ marginBottom: '1rem' }} />
                                <h3>Expert on Codeforces</h3>
                                <p>
                                    {stats?.codeforces?.maxRating
                                        ? `Peak rating ${stats.codeforces.maxRating} across ${stats.codeforces.contests} rated contests`
                                        : 'Achieved Expert rating on Codeforces'}
                                </p>
                            </div>
                        </div>
                        <div className="achievement-card">
                            <div className="achievement-card-body">
                                <Award size={32} color="var(--secondary-color)" aria-hidden="true" style={{ marginBottom: '1rem' }} />
                                <h3>Problem Solving</h3>
                                <p>
                                    {totalSolved > 0
                                        ? `Solved ${totalSolved.toLocaleString()}+ problems across ${platforms.length} judges`
                                        : 'Solved problems across various platforms'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section skills-section">
                <div className="container">
                    <h2 className="section-title">Core Competencies</h2>
                    {competencies.map((group) => (
                        <div className="skill-category" key={group.level}>
                            <h3 className="skill-category-title">{group.level}</h3>
                            <div className="skill-tags">
                                {group.topics.map((topic) => (
                                    <span className="skill-tag" key={topic}>{topic}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CompetitiveProgramming;
