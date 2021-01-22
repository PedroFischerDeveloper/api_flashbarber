import HourModel from '../models/HorModel';


export default class HourController {
    Model: any;

    constructor() {
        this.Model = new HourModel()
    }

    public async getAll(req: any, res: any) {
        const hours = await this.Model.getAll();
        return res.status(hours.status).json({response: hours.response, message: hours.message});
    }

    public async getById(req: any, res: any) {
        const hour = await this.Model.getById(req);
        return res.status(hour.status).json({response: hour.response, message: hour.message});
    }

    public async post(req: any, res: any) {
        const hour = await this.Model.save(req);
        return res.status(hour.status).json({response: hour.response, message: hour.message});
    }

    public async delete(req: any, res: any) {
        return res.status(200).json({response: req.body});
    }
}
