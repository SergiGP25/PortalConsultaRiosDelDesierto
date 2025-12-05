import React from 'react';

const ClientInfo = ({ client }) => {
    if (!client) return null;

    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary-600 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Información del Cliente
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">Nombre</label>
                    <p className="text-lg font-semibold text-gray-800">{client.nombre} {client.apellido}</p>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">Documento</label>
                    <p className="text-lg font-semibold text-gray-800">{client.tipoDocumento} - {client.numeroDocumento}</p>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">Correo</label>
                    <p className="text-lg font-semibold text-gray-800">{client.correo}</p>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">Teléfono</label>
                    <p className="text-lg font-semibold text-gray-800">{client.telefono}</p>
                </div>
            </div>
        </div>
    );
};

export default ClientInfo;
