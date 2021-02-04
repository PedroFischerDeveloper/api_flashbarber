
import HourModel from '../models/HourModel'

export default class HourController {
    model: any;

    constructor() {
        this.model = new HourModel();
    }

    async getById(req: any, res: any) {
        const hours = await this.model.getById(req);
        return res.status(hours.status).json({response: hours.response, message: hours.message});
    }

    async save(req: any, res: any) {
        const hours = await this.model.save(req)
        return res.status(hours.status).json({response: hours.response, message: hours.message});
    }

    async update(req: any, res: any) {
        const hours = await this.model.update(req)
        return res.status(hours.status).json({response: hours.response, message: hours.message});
    }

    async delete(req: any, res: any) {
        const hours = await this.model.delete(req);
        return res.status(200).json({response: hours.response, message: hours.message});
    }

}