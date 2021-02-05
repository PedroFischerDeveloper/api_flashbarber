
import AuthModel from '../models/AuthModel';

export default class AuthController {
    Model: any;

    constructor() {
        this.Model = new AuthModel();
    }

    async auth(req:any, res:any) {
        const user = await this.Model.auth(req, res);
        return res.status(user.status).json({response: user.response, message: user.message}); 
    }

    async logout(req, res) {
        
    }

}