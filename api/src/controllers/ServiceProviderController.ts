import ServiceProviderModel from '../models/ServiceProvider';


export default class ServiceProviderController {
    Model: any;

    constructor() {
        this.Model = new ServiceProviderModel()
    }

    async getAll(req: any, res: any) {
        const serviceProvider = await this.Model.getAll();
        return res.status(serviceProvider.status).json({response: serviceProvider.response, message: serviceProvider.message});
    }

    async getById(req: any, res: any) {
        const serviceProvider = await this.Model.getById(req);
        return res.status(serviceProvider.status).json({response: serviceProvider.response, message: serviceProvider.message});
    }

    async save(req: any, res: any) {
        const serviceProvider = await this.Model.save(req);
        return res.status(serviceProvider.status).json({response: serviceProvider.response, message: serviceProvider.message});
    }

    async update(req: any, res: any) {
        const serviceProvider = await this.Model.update(req);
        return res.status(serviceProvider.status).json({response: serviceProvider.response, message: serviceProvider.message});
    }

    async delete(req: any, res: any) {
        const attend = await this.Model.delete(req);
        return res.status(attend.status).json({response: attend.response, message: attend.message});
    }


}