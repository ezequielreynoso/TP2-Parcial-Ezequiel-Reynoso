import express from "express";
import RouterProductos from "./router/productos.js";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routerProductos = new RouterProductos();

app.use("/productos", routerProductos.start());

const PORT = 8080;

const server = app.listen(
    PORT,
    () => console.log(
        `Servidor express escuchando en http://localhost:${PORT}`
    )
);

server.on(
    "error",
    error => console.log(
        "Servidor express en error:",
        error
    )
);