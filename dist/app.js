"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var routers_1 = __importDefault(require("./routers"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
exports.app = app;
require('dotenv').config();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routers_1.default);
