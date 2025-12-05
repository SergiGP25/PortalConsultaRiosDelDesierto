import React, { useState } from 'react';

const FidelityReportButton = ({ onDownload }) => {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        try {
            await onDownload();
        } catch (error) {
            console.error("Download failed", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={loading}
            className="action-button fidelity-button"
        >
            {loading ? 'Downloading...' : 'Fidelity Report (Excel)'}
        </button>
    );
};

export default FidelityReportButton;
