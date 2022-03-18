import { Request, Response } from 'express';
import CampaignSchema from "../schemas/CampaignSchema";

class CampaignController {

    async create(req: Request, res: Response) {
        try {
            console.log(req.body)
            const campaign = await CampaignSchema.create(req.body);
            return res.send({ campaign: campaign });
        } catch (err) {
            return res.status(400).send({ error: err });
        }

    }

    async find(req: Request, res: Response) {
        try {
            const campaign = await CampaignSchema.find(req.body);
            return res.send({ campaign: campaign });
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    }

    async findByCode(req: Request, res: Response) {
        try {
            const campaign = await CampaignSchema.find({ code: req.params.code} );
            return res.send({ campaign: campaign });
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    }

    async findByActive(req: Request, res: Response) {
        try {
            const dateToday = new Date;
            const dateTodayStr = `${dateToday}`

            const filter = {
                status: "Ativo",
                dateStart: { '$lte': dateToday },
                dateEnd: { '$gte': dateToday },
            }
            const campaign = await CampaignSchema.find(filter);

            return res.send({ campaign: campaign })

        } catch (err) {
            return res.status(400).send({ error: err });
        }

    }

    /*async findByIn4ctive(req: Request, res: Response) {
        try {
            const date_today = new Date;
            const date_today_str = `${date_today}`
            const filter = {
                status: "inativo",
                date_start: { '$lte': date_today },
                date_end: { '$gte': date_today },
            }
            const campaign = await CampaignSchema.find(filter);

            return res.send({ campaign: campaign })

        } catch (err) {
            return res.status(400).send({ error: err });
        }
    }*/

    async findByTitle(req: Request, res: Response) {
        try {
            const campaign = await CampaignSchema.find({ title: req.params.title });
            return res.send({ campaign: campaign })
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    }

    async findByStatus(req: Request, res: Response) {
        try {
            const campaign = await CampaignSchema.find({ status: req.params.status });
            return res.send({ campaign: campaign })
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    }

    async findByType(req: Request, res: Response) {
        try {
            const campaign = await CampaignSchema.find({ type: req.params.type });
            return res.send({ campaign: campaign })
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    }

    async update(req: Request, res: Response) {
        try {
            await CampaignSchema.findByIdAndUpdate(req.params.id, req.body);
            const campaign = await CampaignSchema.findById(req.params.id);
            return res.send({ campaign: campaign });
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            await CampaignSchema.findByIdAndDelete(req.params.id);
            return res.send();
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    }

};

export default CampaignController;