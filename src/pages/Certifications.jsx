import React from 'react';
import { ExternalLink } from 'lucide-react';
import '../styles/certifications.css';

const Certifications = () => {
    const certifications = [
        {
            title: "Machine Learning in Production",
            issuer: "DeepLearning.AI (Coursera)",
            date: "July 2024",
            description: "ML project lifecycle, deployment patterns, and production challenges for structured and unstructured data.",
            link: "https://coursera.org/share/95744f2bca2e6e61066704051528528e",
            image: "/assets/certificates/CERTIFICATE_LANDING_PAGE~DCCKG2MLLQ98_processed.jpg"
        },
        {
            title: "Introduction to Generative AI",
            issuer: "Google Cloud (Coursera)",
            date: "January 2024",
            description: "Foundational knowledge of generative AI, its working principles, model types, and real-world applications.",
            link: "https://coursera.org/share/492b01b0223561b7565ca9d7b747a42e",
            image: "/assets/certificates/CERTIFICATE_LANDING_PAGE~ZD7KPBVDM4FZ_processed.jpg"
        },
        {
            title: "Machine Learning",
            issuer: "Stanford University (Coursera)",
            date: "December 2020",
            description: "Comprehensive course covering machine learning fundamentals, supervised and unsupervised learning.",
            link: "https://coursera.org/share/fbf70571d98c801b77b626ec6e91c887",
            image: "/assets/certificates/Coursera-PQANRQ8KY9E2_processed.jpg"
        },
        {
            title: "On-Device AI",
            issuer: "DeepLearning.AI & Qualcomm",
            date: "2024",
            description: "Model conversion, quantization, and deployment techniques for edge devices and smartphones.",
            link: "https://learn.deeplearning.ai/accomplishments/3df34691-60f8-434f-b017-5e4074083316",
            image: "/assets/certificates/deep-learning-ai.webp"
        },
        {
            title: "Diffusion Models",
            issuer: "DeepLearning.AI",
            date: "2024",
            description: "Built diffusion models from the ground up, understanding sampling and training techniques.",
            link: "https://learn.deeplearning.ai/accomplishments/e1b922d9-f128-4138-87ea-025b6e60abf6",
            image: "/assets/certificates/deep-learning-ai.webp"
        },
        {
            title: "Debugging Generative AI",
            issuer: "DeepLearning.AI & Weights & Biases",
            date: "2024",
            description: "MLOps tools for managing, versioning, and debugging ML workflows and LLM tracing.",
            link: "https://learn.deeplearning.ai/accomplishments/fe85c533-7860-44bf-8ac1-a877aaf0bca1",
            image: "/assets/certificates/deep-learning-ai.webp"
        },
        {
            title: "LangChain for LLM Apps",
            issuer: "DeepLearning.AI & LangChain",
            date: "2024",
            description: "Building LLM applications using LangChain framework, including prompts and agent development.",
            link: "https://learn.deeplearning.ai/accomplishments/7a9c941b-7b68-4be9-a5b9-54b0812243ab",
            image: "/assets/certificates/deep-learning-ai.webp"
        },
        {
            title: "Docker Fundamentals",
            issuer: "Simplilearn",
            date: "2024",
            description: "Docker fundamentals, containerization, and deployment practices for modern applications.",
            link: "https://simpli-web.app.link/e/pH29s9CVNSb",
            image: "/assets/certificates/thumb_6932180_1721041395_processed.jpg"
        },
        {
            title: "Introduction to PyTorch",
            issuer: "Simplilearn",
            date: "2024",
            description: "PyTorch fundamentals for deep learning, including tensor operations and neural networks.",
            link: "https://simpli-web.app.link/e/amkzypEVNSb",
            image: "/assets/certificates/thumb_7032948_1721996246_processed.jpg"
        },
        {
            title: "Introduction to Psychology",
            issuer: "Yale University (Coursera)",
            date: "July 2020",
            description: "Analytical thinking, critical reasoning, and problem-solving through psychological principles.",
            link: "https://coursera.org/share/1b60dce5157977233ff118dc93dab58a",
            image: "/assets/certificates/CERTIFICATE_LANDING_PAGE~9Y9XQ79BBN6F_processed.jpg"
        }
    ];

    return (
        <div className="certifications-page">
            <main className="certifications-container">
                <h1 className="section-title">Certifications</h1>
                <p className="section-subtitle">A collection of my professional certifications and completed courses</p>

                {certifications.map((cert, index) => (
                    <div className="certification" key={index}>
                        <div className="certification-thumbnail">
                            <img src={cert.image} alt={cert.title} />
                        </div>
                        <div className="certification-content">
                            <div className="certification-header">
                                <h3>{cert.title}</h3>
                            </div>
                            <div className="certification-meta">
                                <span className="certification-issuer">{cert.issuer}</span>
                                <span className="certification-date">{cert.date}</span>
                            </div>
                            <p className="certification-description">{cert.description}</p>
                            <div className="mt-auto">
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certification-link">
                                    View Certificate <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Certifications;
