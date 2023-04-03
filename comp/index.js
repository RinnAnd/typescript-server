"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const endpoints_1 = __importDefault(require("./src/endpoints"));
const app = (0, express_1.default)();
const port = 2023;
app.listen(port, () => {
    console.log(`Server connected to the port ${port}`);
});
app.use(endpoints_1.default);
exports.default = app;
