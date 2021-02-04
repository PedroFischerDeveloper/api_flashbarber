
import DayModel from '../models/DayModel'

export default class DayController {
    model: any;

    constructor() {
        this.model = new DayModel();
    }

    async getById(req: any, res: any) {
        const days = await this.model.getById(req);
        return res.status(days.status).json({response: days.response, message: days.message});
    }

    async save(req: any, res: any) {
        const days = await this.model.save(req)
        console.log(days)
        return res.status(days.status).json({response: days, message: days.message});
    }

    async update(req: any, res: any) {
        const days = await this.model.update(req)
        return res.status(days.status).json({response: days.response, message: days.message});
    }

    async delete(req: any, res: any) {
        const days = await this.model.delete(req);
        return res.status(200).json({response: days.response, message: days.message});
    }

}