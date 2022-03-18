import { Router } from 'express';
import CampaignController from '../controllers/CampaignController';

const campaignController = new CampaignController();
const campaignRouter = Router();

campaignRouter.post("/getall", campaignController.find);
campaignRouter.get("/", campaignController.find);
campaignRouter.get("/searchby/:code", campaignController.findByCode);
campaignRouter.get("/search/:status", campaignController.findByStatus);
//campaignRouter.get("/active/:status", campaignController.findByActive);
campaignRouter.get("/find/:title", campaignController.findByTitle);
campaignRouter.get("/:type", campaignController.findByType);
campaignRouter.post("/", campaignController.create);
campaignRouter.put("/:id", campaignController.update);
campaignRouter.delete("/:id", campaignController.delete);

export default campaignRouter;
