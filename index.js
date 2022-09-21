const express = require("express");
const app = express(); // Crea un instancia de Express.
const routes = require("./routes");
const nunjucks = require("nunjucks");

const PORT = process.env.APP_PORT || 5500;

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk");

app.use(routes);


app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}!`));
