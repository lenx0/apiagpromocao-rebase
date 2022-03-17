"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CampaignRouter_1 = __importDefault(require("./CampaignRouter"));
var routers = (0, express_1.Router)();
routers.use('/v1/campaign', CampaignRouter_1.default);
exports.default = routers;
