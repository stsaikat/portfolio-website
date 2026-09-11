import { useEffect, useRef, useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import '../styles/email-button.css';

// One real <button> rather than a nested button inside a role="button" div —
// the old markup was invalid and announced as two overlapping controls.
// Collapsed it reveals the address; expanded, clicking again copies it.
const EmailButton = ({ email }) => {
    const [expanded, setExpanded] = useState(false);
    const [copied, setCopied] = useState(false);
    const containerRef = useRef(null);
    const timeoutRef = useRef(null);

    const handleClick = async () => {
        if (!expanded) {
            setExpanded(true);
            return;
        }
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard blocked (insecure context or denied permission) — the
            // address is already on screen, so there is nothing to recover from.
        }
    };

    useEffect(() => {
        if (!expanded) return;
        const onPointerDown = (event) => {
            if (!containerRef.current?.contains(event.target)) setExpanded(false);
        };
        document.addEventListener('pointerdown', onPointerDown);
        return () => document.removeEventListener('pointerdown', onPointerDown);
    }, [expanded]);

    useEffect(() => () => clearTimeout(timeoutRef.current), []);

    return (
        <div className="email-container" ref={containerRef}>
            <button
                type="button"
                className={`email-button ${expanded ? 'expanded' : ''}`}
                onClick={handleClick}
                aria-label={expanded ? `Copy email address ${email}` : 'Show email address'}
            >
                <Mail size={18} aria-hidden="true" />
                <span className="email-text">Email</span>
                <span className="email-address">{email}</span>
                <span className="copy-button" aria-hidden="true">
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                </span>
            </button>
            <span className="sr-only" role="status" aria-live="polite">
                {copied ? 'Email address copied to clipboard' : ''}
            </span>
            <span className={`copy-success ${copied ? 'show' : ''}`} aria-hidden="true">
                Copied!
            </span>
        </div>
    );
};

export default EmailButton;
