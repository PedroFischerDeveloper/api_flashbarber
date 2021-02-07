import AttendModel from '../models/AttendModel';


export default class AttendController {
    Model: any;

    constructor() {
        this.Model = new AttendModel()
    }

    async getAvaliable(req: any, res: any) {
        const attend = await this.Model.getAvaliable();
        return res.status(attend.status).json({response: attend.response, message: attend.message});
    }

    async getAllByProvider(req: any, res: any) {
        const attend = await this.Model.getByProvider(req);
        return res.status(attend.status).json({response: attend.response, message: attend.message});
    }

    async getById(req: any, res: any) {
        const attend = await this.Model.getById(req);
        return res.status(attend.status).json({response: attend.response, message: attend.message});
    }

    async save(req: any, res: any) {
        const attend = await this.Model.save(req, res);
        return res.status(attend.status).json({response: attend.response, message: attend.message});
    }

    async delete(req: any, res: any) {
        return res.status(200).json({response: req.body});
    }
}
