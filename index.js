const express = require("express");
const nunjucks = require("nunjucks");
const app = express(); // Crea un instancia de Express.
const routes = require("./routes");
const host = ("http://localhost")
const PORT = process.env.APP_PORT || 5500;

app.use(express.static(__dirname + '/src'));
app.set("view engine", "njk");

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.use(express.static('node_modules/bootstrap/dist/'));
app.use(routes);

app.listen(PORT, () => console.log(`Servidor corriendo en ${host}:${PORT}!`));