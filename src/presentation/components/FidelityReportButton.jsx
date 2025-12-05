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
            className="px-6 py-3 rounded-lg bg-primary-500 text-white font-semibold
                     hover:bg-primary-600 active:bg-primary-700 
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-200 shadow-md hover:shadow-lg
                     flex items-center justify-center gap-2 whitespace-nowrap"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {loading ? 'Descargando...' : 'Reporte de Fidelización (Excel)'}
        </button>
    );
};

export default FidelityReportButton;
