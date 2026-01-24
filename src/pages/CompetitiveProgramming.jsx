import React from 'react';
import { Code, Award, CheckCircle } from 'lucide-react';
import '../styles/competitive_programming.css';

const CompetitiveProgramming = () => {
    return (
        <div className="cp-page">
            <section className="section cp-hero">
                <div className="container">
                    <h1 className="section-title">Competitive Programming</h1>
                    <p className="text-center mb-4">Problem solving and algorithmic challenges across various platforms</p>
                </div>
            </section>

            <section className="section cp-profiles">
                <div className="container">
                    <div className="grid grid-3">
                        <div className="cp-card">
                            <div className="cp-card-header">
                                <Code size={40} color="white" style={{ marginBottom: '1rem' }} />
                                <h2>Codeforces</h2>
                                <p className="handle">@stsaikat</p>
                            </div>
                            <div className="cp-card-body">
                                <ul className="cp-stats">
                                    <li>
                                        <span className="stat-label">Max Rating</span>
                                        <span className="stat-value">1767</span>
                                    </li>
                                    <li>
                                        <span className="stat-label">Problems Solved</span>
                                        <span className="stat-value">550+</span>
                                    </li>
                                    <li>
                                        <span className="stat-label">Contests</span>
                                        <span className="stat-value">70+</span>
                                    </li>
                                </ul>
                                <a href="https://codeforces.com/profile/stsaikat" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Profile</a>
                            </div>
                        </div>

                        <div className="cp-card">
                            <div className="cp-card-header">
                                <Award size={40} color="white" style={{ marginBottom: '1rem' }} />
                                <h2>CodeChef</h2>
                                <p className="handle">@thestsaikat</p>
                            </div>
                            <div className="cp-card-body">
                                <ul className="cp-stats">
                                    <li>
                                        <span className="stat-label">Max Rating</span>
                                        <span className="stat-value">1844</span>
                                    </li>
                                    <li>
                                        <span className="stat-label">Problems Solved</span>
                                        <span className="stat-value">300+</span>
                                    </li>
                                    <li>
                                        <span className="stat-label">Contests</span>
                                        <span className="stat-value">20+</span>
                                    </li>
                                </ul>
                                <a href="https://www.codechef.com/users/thestsaikat" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Profile</a>
                            </div>
                        </div>

                        <div className="cp-card">
                            <div className="cp-card-header">
                                <CheckCircle size={40} color="white" style={{ marginBottom: '1rem' }} />
                                <h2>LeetCode</h2>
                                <p className="handle">@sunipun</p>
                            </div>
                            <div className="cp-card-body">
                                <ul className="cp-stats">
                                    <li>
                                        <span className="stat-label">Problems Solved</span>
                                        <span className="stat-value">450+</span>
                                    </li>
                                    <li>
                                        <span className="stat-label">Badges</span>
                                        <span className="stat-value">5+</span>
                                    </li>
                                    <li>
                                        <span className="stat-label">Global Rank</span>
                                        <span className="stat-value">Top 1%</span>
                                    </li>
                                </ul>
                                <a href="https://leetcode.com/sunipun/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section achievements-section">
                <div className="container">
                    <h2 className="section-title">Notable Achievements</h2>
                    <div className="grid grid-2">
                        <div className="achievement-card">
                            <div className="achievement-card-body">
                                <Award size={32} color="var(--secondary-color)" style={{ marginBottom: '1rem' }} />
                                <h3>Expert Level at Codeforces</h3>
                                <p>Achieved Expert Rating on Codeforces</p>
                            </div>
                        </div>
                        <div className="achievement-card">
                            <div className="achievement-card-body">
                                <Award size={32} color="var(--secondary-color)" style={{ marginBottom: '1rem' }} />
                                <h3>Problem Solving</h3>
                                <p>Solved 2000+ problems across various platforms</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section skills-section">
                <div className="container">
                    <h2 className="section-title">Core Competencies</h2>

                    <div className="skill-category">
                        <h3 className="skill-category-title">Advanced</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Dynamic Programming</span>
                            <span className="skill-tag">Divide and Conquer</span>
                            <span className="skill-tag">Backtracking</span>
                            <span className="skill-tag">Union Find</span>
                            <span className="skill-tag">Trie</span>
                            <span className="skill-tag">Monotonic Stack</span>
                            <span className="skill-tag">Data Stream</span>
                            <span className="skill-tag">Topological Sort</span>
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3 className="skill-category-title">Intermediate</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Hash Table</span>
                            <span className="skill-tag">Depth-First Search</span>
                            <span className="skill-tag">Tree</span>
                            <span className="skill-tag">Binary Tree</span>
                            <span className="skill-tag">Math</span>
                            <span className="skill-tag">Breadth-First Search</span>
                            <span className="skill-tag">Greedy</span>
                            <span className="skill-tag">Binary Search</span>
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3 className="skill-category-title">Fundamental</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Array</span>
                            <span className="skill-tag">String</span>
                            <span className="skill-tag">Two Pointers</span>
                            <span className="skill-tag">Sorting</span>
                            <span className="skill-tag">Linked List</span>
                            <span className="skill-tag">Stack</span>
                            <span className="skill-tag">Matrix</span>
                            <span className="skill-tag">Simulation</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CompetitiveProgramming;
