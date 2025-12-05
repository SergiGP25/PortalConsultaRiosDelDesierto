import React from 'react';

const ClientInfo = ({ client }) => {
    if (!client) return null;

    return (
        <div className="client-info-card">
            <h2>Client Information</h2>
            <div className="info-grid">
                <div className="info-item">
                    <label>Name:</label>
                    <span>{client.nombre} {client.apellido}</span>
                </div>
                <div className="info-item">
                    <label>Document:</label>
                    <span>{client.tipoDocumento} - {client.numeroDocumento}</span>
                </div>
                <div className="info-item">
                    <label>Email:</label>
                    <span>{client.correo}</span>
                </div>
                <div className="info-item">
                    <label>Phone:</label>
                    <span>{client.telefono}</span>
                </div>
            </div>
        </div>
    );
};

export default ClientInfo;
