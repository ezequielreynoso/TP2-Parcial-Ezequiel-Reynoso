class ProductosMem {

    constructor() {
        this.productos = [];
    }

    obtenerProductos = async () => {
        return this.productos;
    }

    guardarProducto = async producto => {
        this.productos.push(producto);

        return producto;
    }
}

export default ProductosMem;