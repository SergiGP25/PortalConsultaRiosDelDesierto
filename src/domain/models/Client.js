export class Purchase {
    constructor({ fechaCompra, monto, descripcion }) {
        this.fechaCompra = new Date(fechaCompra);
        this.monto = monto;
        this.descripcion = descripcion;
    }
}

export class Client {
    constructor({ tipoDocumento, numeroDocumento, nombre, apellido, correo, telefono, compras }) {
        this.tipoDocumento = tipoDocumento;
        this.numeroDocumento = numeroDocumento;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.telefono = telefono;
        this.compras = compras ? compras.map(c => new Purchase(c)) : [];
    }
}
