"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
var connectString = process.env.MONGO_URI;
mongoose_1.default.connect(connectString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
exports.default = mongoose_1.default;
