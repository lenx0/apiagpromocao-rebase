"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../database"));
var campaignSchema = new database_1.default.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        required: true,
        unique: false,
    },
    date_start: {
        type: String,
        required: true,
        unique: false,
    },
    date_end: {
        type: String,
        required: true,
        unique: false,
    },
    active: {
        type: String,
        required: true,
        unique: false,
    },
    smtp: [
        {
            host: {
                type: String
            },
            port: {
                type: String
            },
            name: {
                type: String
            },
            email: {
                type: String
            },
            user: {
                type: String
            },
            pass: {
                type: String
            },
        }
    ]
});
var CampaignSchema = database_1.default.model("colcampaign", campaignSchema);
exports.default = CampaignSchema;
