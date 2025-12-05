import React from 'react';

const PurchasesTable = ({ purchases }) => {
    if (!purchases || purchases.length === 0) {
        return <div className="no-data">No purchases found for this client.</div>;
    }

    return (
        <div className="table-container">
            <h3>Purchases History</h3>
            <table className="purchases-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {purchases.map((purchase, index) => (
                        <tr key={index}>
                            <td>{new Date(purchase.fechaCompra).toLocaleDateString()} {new Date(purchase.fechaCompra).toLocaleTimeString()}</td>
                            <td>${purchase.monto.toFixed(2)}</td>
                            <td>{purchase.descripcion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PurchasesTable;
