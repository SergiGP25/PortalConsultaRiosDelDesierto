import React from 'react';

const PurchasesTable = ({ purchases }) => {
    if (!purchases || purchases.length === 0) {
        return (
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
                <div className="text-gray-400 text-lg">No se encontraron compras para este cliente.</div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 overflow-hidden">
            <h3 className="text-2xl font-bold text-primary-600 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Historial de Compras
            </h3>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b-2 border-primary-500 bg-primary-50">
                            <th className="px-6 py-4 text-left text-sm font-bold text-primary-700 uppercase tracking-wider">Fecha</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-primary-700 uppercase tracking-wider">Monto</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-primary-700 uppercase tracking-wider">Descripción</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {purchases.map((purchase, index) => (
                            <tr key={index} className="hover:bg-blue-50 transition-colors duration-150">
                                <td className="px-6 py-4 text-gray-700 whitespace-nowrap">
                                    {new Date(purchase.fechaCompra).toLocaleDateString()} {new Date(purchase.fechaCompra).toLocaleTimeString()}
                                </td>
                                <td className="px-6 py-4 text-gray-900 font-semibold">${purchase.monto.toFixed(2)}</td>
                                <td className="px-6 py-4 text-gray-700">{purchase.descripcion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PurchasesTable;
