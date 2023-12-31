"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.server = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const router_1 = require("./routes/router"); // Importe suas rotas aqui
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
exports.server = server;
const io = new socket_io_1.Server(server, {
    cors: {
        origin: '*',
        methods: ['GET, POST']
    }
});
exports.io = io;
// Defina o middleware do corpo de análise JSON para o Express
app.use(express_1.default.json());
// Suas rotas
app.use('/api', router_1.router);
