import { Router, Request, Response } from 'express';

const router: Router = Router();

// api version 
router.get("/api", (req: Request, res: Response) => {
    res.status(200).json({response:"API 1.0"});
});


//atendimento
import AttendController from './controllers/AttendController';
const ControllerAttend = new AttendController();


router.get("/api/admin/attend/avaliable", async (req:  Request, res: Response) => {
    ControllerAttend.getAvaliable(req, res);   
    
});

router.get("/api/admin/attend", async (req:  Request, res: Response) => {
    ControllerAttend.getAll(req, res);   
});

router.get("/api/admin/attend/:id", async (req:  Request, res: Response) => {
    ControllerAttend.getById(req, res);
});

router.post("/api/admin/attend/save", async (req:  Request, res: Response) => {
    ControllerAttend.post(req, res);   
});

router.delete("/api/admin/attend/delete", ControllerAttend.delete);

// hora
import HourController from './controllers/HourController';
const ControllerHour = new HourController();

router.get("/api/admin/hour", async (req:  Request, res: Response) => {
    ControllerHour.getAll(req, res);   
});

router.get("/api/admin/hour/:id", async (req:  Request, res: Response) => {
    ControllerHour.getById(req, res);   
});

router.post("/api/admin/hour/save", async (req:  Request, res: Response) => {
    ControllerHour.post(req, res);   
});

router.delete("/api/admin/hour/delete", async (req:  Request, res: Response) => {
   ControllerHour.delete(req, res);   
});

export const Routes: Router = router;