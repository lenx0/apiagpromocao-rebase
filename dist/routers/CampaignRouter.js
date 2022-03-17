"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CampaignController_1 = __importDefault(require("../controllers/CampaignController"));
var campaignController = new CampaignController_1.default();
var campaignRouter = (0, express_1.Router)();
campaignRouter.post("/getall", campaignController.find);
campaignRouter.get("/getid", campaignController.findById);
campaignRouter.get("/active", campaignController.findByStatus);
campaignRouter.post("/", campaignController.create);
campaignRouter.put("/:id", campaignController.update);
campaignRouter.delete("/:id", campaignController.delete);
exports.default = campaignRouter;
