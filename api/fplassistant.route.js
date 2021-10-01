import express from "express"

const router = express.Router()

router.route("/").get((req, res) => res.send("Welcome to the FPL Assistant API"))

export default router 