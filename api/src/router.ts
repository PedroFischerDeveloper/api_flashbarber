import { Router, Request, Response } from 'express';

const router: Router = Router();

// api version 
router.get("/api", (req: Request, res: Response) => {
    res.status(200).json({response:"API 1.0"});
});

//atendimento
import AttendController from './controllers/AttendController';
const ControllerAttend = new AttendController();


router.get("/api/admin/attends/avaliable", async (req:  Request, res: Response) => {
    ControllerAttend.getAvaliable(req, res);   
});

router.get("/api/admin/attends", async (req:  Request, res: Response) => {
    ControllerAttend.getAll(req, res);   
});

router.get("/api/admin/attends/:id", async (req:  Request, res: Response) => {
    ControllerAttend.getById(req, res);
});

router.post("/api/admin/attends/save", async (req:  Request, res: Response) => {
    ControllerAttend.save(req, res);   
});

router.delete("/api/admin/attends/delete", async (req:  Request, res: Response) => {
    ControllerAttend.delete(req, res);   
});

// service provider
import ServiceProviderController from './controllers/ServiceProviderController';
const ControllerServiceProvider= new ServiceProviderController();

router.get("/api/admin/providers", async (req:  Request, res: Response) => {
    ControllerServiceProvider.getAll(req, res);   
});

router.get("/api/admin/providers/:id", async (req:  Request, res: Response) => {
    ControllerServiceProvider.getById(req, res);
});

router.post("/api/admin/providers/save", async (req:  Request, res: Response) => {
    ControllerServiceProvider.save(req, res);   
});

router.delete("/api/admin/providers/delete", async (req:  Request, res: Response) => {
    ControllerServiceProvider.delete(req, res);   
});

export const Routes: Router = router;