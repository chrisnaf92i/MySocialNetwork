import express from "express";
import router from "./router/routes.js";

const PORT = process.env.PORT || 8000;

const app = express();

app.use(router)

app.listen(PORT, console.log(`Lancement du server sur le port ${PORT}`));