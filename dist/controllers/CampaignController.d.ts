import { Request, Response } from 'express';
declare class CampaignController {
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    find(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    findById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    findByStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    update(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export default CampaignController;
