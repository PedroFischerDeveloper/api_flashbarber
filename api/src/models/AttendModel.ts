import knex from '../database/index';
import {
    Response200,
    Response201,
    Response401,
    Response404,
    Response500

} from '../responseStatus/responseStatus';

import Pagination from '../utils/Paginate';
import Criptograph from '../utils/Criptograph';

export default class AttendModel {
    paginate: any; 

    constructor() {
        this.paginate = new Pagination();
    }

    async getPaginate(req) {

    }

    async getById(req) {
        const {cd_id} = req.params;
        
        const attend = await knex('tb_attends').where({
            cd_id: cd_id
        });

        return {status: Response200.status, response: attend, message: Response200.message};
    }

    async getByProvider(req) {
        const {cd_provider} = req.params;
        
        const attend = await knex('tb_attends').where({
            cd_users_provider_id: cd_provider,
            cd_isAvaliable: 1,
        });

        return {status: Response200.status, response: attend, message: Response200.message};
    }

    async save(req) {
        const {
            cd_provider_id, 
            cd_user_id,
            dt_attends,
            ds_description,
            ds_nome,
            ds_phone,
            ds_email,
        } = req.body;

        const checkUserExists = await knex('tb_users')
        .where(
            {
                cd_user: cd_user_id
            }
        );

        if(checkUserExists == undefined || checkUserExists.length <= 0) {
            
            const cripto = new Criptograph();
            
            const randomPassword = Math.random().toString(36).substring(0, 20)
            
            const hashPassword = cripto.criptograph(randomPassword);

            try {
                const registeredUser = await knex('tb_users')
                .insert({
                    nm_user: ds_nome,
                    ds_email: ds_email, 
                    cd_phone: ds_phone,
                    cd_password: hashPassword
                });

                const cd_users_provider_attends = await knex('tb_users_provider_attends').insert({
                    cd_user_id: registeredUser,
                    cd_provider_id: cd_provider_id,
                });
                
                const attend = await knex('tb_attends').insert({
                    cd_isAvaliable: 0,
                    dt_attends: dt_attends,
                    ds_description: ds_description,
                    cd_users_provider_id: cd_provider_id
                });

                return {status: Response201.status, response: attend, message: Response201.message};

            } catch(err) {
                return {status: Response500.status, response: err, message: Response500.message};
            }

        } else {

            try {
                const cd_users_provider_attends = await knex('tb_users_provider_attends').insert({
                    cd_user_id: cd_user_id,
                    cd_provider_id: cd_provider_id,
                });

                const attend = await knex('tb_attends').insert({
                    cd_isAvaliable: 0,
                    dt_attends: dt_attends,
                    ds_description: ds_description,
                    cd_users_provider_id: cd_provider_id
                    });
    
                    return {status: Response201.status, response: attend, message: Response201.message};

            } catch(err) {
                return {status: Response500.status, response: err.name, message: Response500.message};
            }
        
        }
    
    }

    async put(req) {
        
    }

    async delete(req) {
        
    }

}