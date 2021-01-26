import UserModel from '../models/UserModel';

export default class UserController {
    Model: any;

    constructor() {
        this.Model = new UserModel()
    }

    async getPaginate(res: any, perpage: number, offset: number, page: number) {
        const usersPaginated = await this.Model.getPaginate(perpage, offset, page);
        return res.status(usersPaginated.status).json({response: usersPaginated.response, message: usersPaginated.message});
    }
    
    async getById(req: any, res: any) {
        const user = await this.Model.getById(req);
        return res.status(user.status).json({response: user.response, message: user.message});
    }


    async save(req: any, res: any) {
        const user = await this.Model.save(req, res);
        return res.status(user.status).json({response: user.response, message: user.message});
    }

    async update(req:any, res:any) {
        
    }

    async delete(req: any, res: any) {
        const user = await this.Model.delete(req);
        return res.status(user.status).json({response: user.response, message: user.message});
    }
}
