import React, { useState } from 'react';

const ClientSearch = ({ onSearch, loading }) => {
    const [documentNumber, setDocumentNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (documentNumber.trim()) {
            onSearch(documentNumber);
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    type="text"
                    value={documentNumber}
                    onChange={(e) => setDocumentNumber(e.target.value)}
                    placeholder="Enter Document Number"
                    className="search-input"
                    disabled={loading}
                />
                <button type="submit" className="search-button" disabled={loading}>
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </form>
        </div>
    );
};

export default ClientSearch;
