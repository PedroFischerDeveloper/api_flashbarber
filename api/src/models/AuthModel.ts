import knex from '../database/index';
import {
    Response200,
    Response201,
    Response401,
    Response404,
    Response500,
    Response422

} from '../responseStatus/responseStatus';

import Criptograph from '../utils/Criptograph';
import jwt from 'jsonwebtoken';

export default class AuthModel {
    model: any; 
    
   
    async auth(req) {
        
        const {ds_email, cd_password, isProvider} = req.body;

        try {
            const cripto = new Criptograph();
            const hashPassword = cripto.criptograph(cd_password);
            
            let response = null;

            if(isProvider) {
                response = await knex('tb_service_provider').where({
                    ds_email,
                    hashPassword
                });
            } else {
                response = await knex('tb_users').where({
                    ds_email,
                    hashPassword
                });
            }
            

            if(response == undefined || response.length <= 0) {
                return {status: Response422.status, response: {}, message: Response422.message};
            } else {

                
                const token = jwt.sign( response.cd_user , process.env.SECRET, {
                    expiresIn: 30000 
                });
                
                return {status: Response200.status, response: {auth: true, token: token}, message: Response200.message};


            }

        }catch(err) {
            return {status: Response500.status, response: err.name, message: Response500.message};
        }
    }


   
}