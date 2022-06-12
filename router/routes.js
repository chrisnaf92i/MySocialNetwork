import express from "express";

const router = express.Router();

router.get("/api", (_, res) => {
    res.send("Bienvenu sur le réseaux social de christopher nafrere");
});



export default router;