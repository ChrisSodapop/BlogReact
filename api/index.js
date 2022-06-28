const express = require("express");
const router = require("./router.js");

const port = process.env.PORT || 5000;
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PATCH, DELETE"
  );
  next();
});
app.use(express.json());
// routeur
app.use(router);

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
