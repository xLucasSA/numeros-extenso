require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./router");

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`);
});
