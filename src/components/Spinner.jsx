import '../styles/spinner.css';

const Spinner = ({ label = 'Loading' }) => (
    <div className="loading-container" role="status" aria-live="polite">
        <div className="spinner" />
        <span className="sr-only">{label}</span>
    </div>
);

export default Spinner;
