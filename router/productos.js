import express from "express";
import ControladorProductos from "../controlador/productos.js";

const router = express.Router();

class RouterProductos {

    constructor() {
        this.controladorProductos =
            new ControladorProductos();
    }

    start() {

        router.post(
            "/ingreso",
            this.controladorProductos.guardarProducto
        );

        router.get(
            "/listar",
            this.controladorProductos.obtenerProductos
        );

        router.get(
            "/estadistica",
            this.controladorProductos.obtenerEstadistica
        );

        return router;
    }
}

export default RouterProductos;