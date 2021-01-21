import express from "express";
const router = express.Router();


//import controllers
import AttendController from './controllers/Admin/AttendController';
import HourController from './controllers/Admin/HourCrontroller';



// instance controllers
const attendController = new AttendController();
const hourController = new HourController();



// admin hours 
router.get("/admin/hours", hourController.getAll);
router.get("/admin/hours/:id", hourController.getById);

router.post("/admin/hours/save", hourController.save(Request, Response));
router.put("/admin/hours/update", hourController.update(Request, Response));
router.delete("/admin/hours/delete", hourController.delete(Request, Response));

// admin attends


// admin user

export default router;