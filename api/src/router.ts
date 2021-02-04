import { Router, Request, Response } from 'express';

const router: Router = Router();

// api version 
router.get("/api", (req: Request, res: Response) => {
    res.status(200).json({response:"API 0.1.1"});
});

//atendimento
import AttendController from './controllers/AttendController';
import ServiceProviderController from './controllers/ServiceProviderController';
import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';
import HourController from './controllers/HourController';
import DayController from './controllers/DayController';

const ControllerAttend = new AttendController();
const ControllerServiceProvider= new ServiceProviderController();
const ControllerUser = new UserController();
const ControllerAuth = new AuthController();
const ControllerHour = new HourController();
const ControllerDay = new DayController();

//auth
router.post("/api/auth", async (req:  Request, res: Response) => {
    return ControllerAuth.auth(req, res);
});

// attends
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

// providers
router.get("/api/providers", async (req:  Request, res: Response) => {
    ControllerServiceProvider.getPaginate(res, 5, 5, 1);   
});

router.get("/api/providers/:cd_provider", async (req:  Request, res: Response) => {
    ControllerServiceProvider.getById(req, res);
});

router.post("/api/providers/register", async (req:  Request, res: Response) => {
    ControllerServiceProvider.save(req, res);   
});

router.delete("/api/providers/delete", async (req:  Request, res: Response) => {
    ControllerServiceProvider.delete(req, res);   
});

// users
router.get("/api/users/:perpage/:offset/:page", async (req:  Request, res: Response) => {
    return ControllerUser.getPaginate(res, 5, 5, 1);
});

router.get("/api/users/:cd_user", async (req:  Request, res: Response) => {
    return ControllerUser.getById(req, res);
});

router.post("/api/register", async (req:  Request, res: Response) => {
    return ControllerUser.save(req, res);
});

router.delete("/api/admin/delete", async (req:  Request, res: Response) => {
    return ControllerUser.delete(req, res);
});




// hours
router.get("/api/admin/hours/:cd_hour", async (req:  Request, res: Response) => {
    return ControllerHour.getById(req, res);
});

router.post("/api/admin/hours", async (req:  Request, res: Response) => {
    return ControllerHour.save(req, res);
});

router.put("/api/admin/hours", async (req:  Request, res: Response) => {
    return ControllerHour.update(req, res);
});

router.delete("/api/admin/hours", async (req:  Request, res: Response) => {
    return ControllerHour.delete(req, res);
});

// days
router.get("/api/admin/days/:cd_day", async (req:  Request, res: Response) => {
    return ControllerDay.getById(req, res);
});

router.post("/api/admin/days", async (req:  Request, res: Response) => {
    return ControllerDay.save(req, res);
});

router.put("/api/admin/days", async (req:  Request, res: Response) => {
    return ControllerDay.update(req, res);
});

router.delete("/api/admin/days", async (req:  Request, res: Response) => {
    return ControllerDay.delete(req, res);
});



export const Routes: Router = router;