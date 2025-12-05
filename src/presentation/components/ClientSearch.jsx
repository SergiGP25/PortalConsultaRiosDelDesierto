import React, { useState } from 'react';

const ClientSearch = ({ onSearch, loading, documentTypes = [] }) => {
    const [documentNumber, setDocumentNumber] = useState('');
    const [selectedDocumentType, setSelectedDocumentType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (documentNumber.trim() && selectedDocumentType) {
            onSearch(documentNumber, selectedDocumentType);
        } else {
            if (!selectedDocumentType) alert('Please select a document type.');
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit} className="search-form">
                <select
                    value={selectedDocumentType}
                    onChange={(e) => setSelectedDocumentType(e.target.value)}
                    className="search-select"
                    disabled={loading}
                    required
                >
                    <option value="">Select Document Type</option>
                    {documentTypes && documentTypes.map((type) => (
                        <option key={type.id} value={type.id}>
                            {type.descripcion || type.documento}
                        </option>
                    ))}
                </select>
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
