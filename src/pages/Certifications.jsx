import { ExternalLink } from 'lucide-react';
import Seo from '../components/Seo';
import site from '../data/site';
import { certifications } from '../data/certifications';
import '../styles/shared.css';

const Certifications = () => {
    return (
        <div className="certifications-page">
            <Seo
                title={`Certifications - ${site.name}`}
                description="Certifications in deep learning, generative AI, on-device inference and MLOps from DeepLearning.AI, Stanford, Google Cloud and Qualcomm."
                path="/certifications"
            />
            <section className="certifications-hero">
                <div className="container">
                    <h1 className="section-title text-center">Certifications</h1>
                    <p className="section-subtitle">A collection of my professional certifications and completed courses</p>
                </div>
            </section>

            <section className="certifications-list section">
                <div className="container">
                    <div className="grid">
                        {certifications.map((cert) => (
                            <div className="certification" key={cert.link}>
                                <div className="certification-thumbnail">
                                    <img src={cert.image} alt="" loading="lazy" decoding="async" />
                                </div>
                                <div className="certification-content">
                                    <div className="certification-header">
                                        <h2>{cert.title}</h2>
                                    </div>
                                    <div className="certification-meta">
                                        <span className="certification-issuer">{cert.issuer}</span>
                                        <span className="certification-date">{cert.date}</span>
                                    </div>
                                    <p className="certification-description">{cert.description}</p>
                                    <div className="mt-auto">
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="certification-link"
                                        >
                                            View Certificate
                                            <ExternalLink size={14} aria-hidden="true" />
                                            <span className="sr-only"> for {cert.title} (opens in a new tab)</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Certifications;
