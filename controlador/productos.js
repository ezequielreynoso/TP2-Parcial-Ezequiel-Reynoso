import ServicioProductos from "../servicio/productos.js";

class ControladorProductos {

    constructor() {
        this.servicioProductos = new ServicioProductos();
    }


    guardarProducto = async (req, res) => {

        try {

            const producto = req.body;

            const productoGuardado =
                await this.servicioProductos.guardarProducto(producto);

            res.json(productoGuardado);

        } catch (error) {

            res.status(400).json({
                error: error.message
            });

        }
    }


    obtenerProductos = async (req, res) => {

        try {

            const productos =
                await this.servicioProductos.obtenerProductos();

            if (productos.length === 0) {
                return res.send("No hay productos para listar");
            }

            res.json(productos);

        } catch (error) {

            res.status(500).json({
                error: error.message
            });

        }
    }


    obtenerEstadistica = async (req, res) => {

        try {

            const estadistica =
                await this.servicioProductos.obtenerEstadistica();

            res.json(estadistica);

        } catch (error) {

            res.status(500).json({
                error: error.message
            });

        }
    }
}

export default ControladorProductos;