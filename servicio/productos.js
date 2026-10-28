import ProductosMem from "../model/DAOs/productosMem.js";

class ServicioProductos {

    constructor() {
        this.productosMem = new ProductosMem();
    }


    validarProducto(producto) {

        if (
            !producto.nombre ||
            producto.precio === undefined ||
            !producto.descripcion
        ) {
            throw new Error("Faltan campos obligatorios");
        }

        if (Number(producto.precio) < 0) {
            throw new Error("El precio no puede ser negativo");
        }
    }


    guardarProducto = async producto => {

        this.validarProducto(producto);

        producto.precio = Number(producto.precio);

        return await this.productosMem.guardarProducto(producto);
    }


    obtenerProductos = async () => {

        return await this.productosMem.obtenerProductos();
    }


    obtenerEstadistica = async () => {

        const productos =
            await this.productosMem.obtenerProductos();

        if (productos.length === 0) {
            throw new Error(
                "No hay productos para calcular estadísticas"
            );
        }

        const precioSumatoria =
            productos.reduce(
                (acumulador, producto) =>
                    acumulador + producto.precio,
                0
            );

        const precioPromedio =
            precioSumatoria / productos.length;

        const productoMinimo =
            productos.reduce(
                (minimo, producto) =>
                    producto.precio < minimo.precio
                        ? producto
                        : minimo
            );

        const productoMaximo =
            productos.reduce(
                (maximo, producto) =>
                    producto.precio > maximo.precio
                        ? producto
                        : maximo
            );

        return {
            precioPromedio,
            precioSumatoria,

            precioMinimo: {
                precio: productoMinimo.precio,
                nombreProducto: productoMinimo.nombre
            },

            precioMaximo: {
                precio: productoMaximo.precio,
                nombreProducto: productoMaximo.nombre
            }
        };
    }
}

export default ServicioProductos;