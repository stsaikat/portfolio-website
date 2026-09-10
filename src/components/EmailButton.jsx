import React, { useState, useEffect } from 'react';
import { Mail, Copy } from 'lucide-react';

const EmailButton = ({ email }) => {
    const [expanded, setExpanded] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);

    const toggleExpanded = () => setExpanded((prev) => !prev);

    const handleCopy = (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(email).then(() => {
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        });
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (expanded && !event.target.closest('.email-button')) {
                setExpanded(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [expanded]);

    return (
        <div className="email-container">
            <div
                className={`email-button ${expanded ? 'expanded' : ''}`}
                onClick={toggleExpanded}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleExpanded();
                    }
                }}
                aria-label="Show email address"
            >
                <Mail size={18} />
                <span className="email-text">Email</span>
                <span className="email-address">{email}</span>
                <button className="copy-button" onClick={handleCopy} type="button" aria-label="Copy email">
                    <Copy size={16} />
                </button>
                <span className={`copy-success ${copySuccess ? 'show' : ''}`}>Copied!</span>
            </div>
        </div>
    );
};

export default EmailButton;
