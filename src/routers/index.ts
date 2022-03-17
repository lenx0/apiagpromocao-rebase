import { Router } from 'express';
import CampaignRouter from './CampaignRouter';

const routers = Router();

routers.use('/v1/campaign', CampaignRouter);

export default routers;