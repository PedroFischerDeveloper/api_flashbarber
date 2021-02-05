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
          
            if(isProvider) {
            
                const response = await knex('tb_service_provider')
                .where({
                    ds_email:ds_email,
                    cd_password: hashPassword
                });

                let secret;

                if(process.env['SECRET']) {
                    secret = process.env['SECRET'];
                } else {
                    secret = "aSoeAScdnc@RE208_%@002";
                }
                
                let id = response.cd_provider;

                const token = jwt.sign( {id} , secret, {
                    expiresIn: 30000 
                });    

                console.log(token)
                return {status: Response200.status, response: {auth: true, token: token}, message: Response200.message};

            } else {
                
                const response = await knex('tb_users')
                .select('nm_user', 'ds_email', 'cd_password', 'cd_phone', 'created_at', 'updated_at')
                .where({
                    ds_email:ds_email,
                    cd_password: hashPassword
                });

                let secret;

                if(process.env['SECRET']) {
                    secret = process.env['SECRET'];
                } else {
                    secret = "aSoeAScdnc@RE208_%@002";
                }
                
                let id = response.cd_user;

                const token = jwt.sign( {id} , secret, {
                    expiresIn: 30000 
                }); 

                return {status: Response200.status, response: {auth: true, token: token}, message: Response200.message};
            }
            
          

        }catch(err) {
            return {status: Response500.status, response: err.name, message: Response500.message};
        }
    }


   
}