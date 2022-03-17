import mongoose from "../database";

const campaignSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true,
            unique: true,
        },
        title: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        dateStart: {
            type: String,
            required: true,
        },
        dateEnd: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        pageHtml: {
            type: String,
            required: true,
        },
        emailToSend: {
            type: String,
            required: true,
        },
        smtp:
        {
            host: {
                type: String,
                required: true,
            },
            port: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            user: {
                type: String,
                required: true,
            },
            pass: {
                type: String,
                required: true,
            },
        }
    }

);

const CampaignSchema = mongoose.model("colcampaigns", campaignSchema);

export default CampaignSchema;