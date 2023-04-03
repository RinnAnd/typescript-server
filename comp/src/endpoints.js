"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Hello from express plus Typescript");
});
router.get("/hi", (req, res) => {
    res.send("It is currently working right now, yes");
});
exports.default = router;
