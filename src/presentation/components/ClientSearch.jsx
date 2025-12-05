import React, { useState } from 'react';

const ClientSearch = ({ onSearch, loading, documentTypes = [] }) => {
    const [documentNumber, setDocumentNumber] = useState('');
    const [selectedDocumentType, setSelectedDocumentType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (documentNumber.trim() && selectedDocumentType) {
            onSearch(documentNumber, selectedDocumentType);
        } else {
            if (!selectedDocumentType) alert('Por favor seleccione un tipo de documento.');
        }
    };

    return (
        <div className="flex-1 max-w-2xl w-full">
            <form onSubmit={handleSubmit} className="flex flex-wrap gap-3">
                <select
                    value={selectedDocumentType}
                    onChange={(e) => setSelectedDocumentType(e.target.value)}
                    className="search-select min-w-[200px]"
                    disabled={loading}
                    required
                >
                    <option value="">Seleccione Tipo de Documento</option>
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
                    placeholder="Ingrese Número de Documento"
                    className="flex-1 min-w-[200px] px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-800 
                             focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 
                             transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading}
                />
                <button
                    type="submit"
                    className="px-8 py-3 rounded-lg bg-primary-500 text-white font-semibold
                             hover:bg-primary-600 active:bg-primary-700 
                             disabled:opacity-50 disabled:cursor-not-allowed
                             transition-all duration-200 shadow-md hover:shadow-lg
                             whitespace-nowrap"
                    disabled={loading}
                >
                    {loading ? 'Buscando...' : 'Buscar'}
                </button>
            </form>
        </div>
    );
};

export default ClientSearch;
