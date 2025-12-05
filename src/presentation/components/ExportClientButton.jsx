import React, { useState } from 'react';

const ExportClientButton = ({ onExport, disabled }) => {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        try {
            await onExport();
        } catch (error) {
            console.error("Export failed", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={disabled || loading}
            className="action-button export-button"
        >
            {loading ? 'Exporting...' : 'Export CSV'}
        </button>
    );
};

export default ExportClientButton;
