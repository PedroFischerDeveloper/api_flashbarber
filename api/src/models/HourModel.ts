import knex from '../database/index';
import {
    Response200,
    Response201,
    Response401,
    Response404,
    Response500,
    Response422

} from '../responseStatus/responseStatus';

import Pagination from '../utils/Paginate';

export default class HourModel {
    paginate: any; 
    
    constructor() {
        this.paginate = new Pagination();
    }
  
    async getById(req) {
        const {cd_hour} = req.params;

        const response = await knex('tb_hours_provider')
        .select('cd_hoursProvider', 'hr_provider', 'cd_provider_id')
        .where({cd_hoursProvider:cd_hour})
       

        if(response == undefined) {
            return {status: Response404.status, response: response, message: Response404.message};
        } else {
            return {status: Response200.status, response: response, message: Response200.message};
        }
    }

    async save(req) {
        
        const {hr_provider, cd_provider_id} = req.body;
     
        
        try {
           
            const response = await knex('tb_hours_provider').insert({
                hr_provider,
                cd_provider_id
            });

            if(response.length == undefined || response.length <= 0) {
                return {status: Response422.status, response: {}, message: Response422.message};
            } else {
                return {status: Response201.status, response: response, message: Response201.message};
            }

        }catch(err) {
            return {status: Response500.status, response: err.name, message: Response500.message};
        }
    }

    async update(req) {
        const {cd_hoursProvider, hr_provider} = req.body;

        const response = await knex('tb_hours_provider')
        .where({cd_hoursProvider: cd_hoursProvider})
        .update({
            hr_provider
        })

        if(response == undefined) {
            return {status: Response404.status, response: response, message: Response404.message};
        } else {
            return {status: Response200.status, response: "Atualizado com sucesso", message: Response200.message};
        }
    }

    async delete(req) {
        const {cd_hoursProvider} = req.body;

        const response = await knex('tb_hours_provider')
        .where({cd_hoursProvider: cd_hoursProvider})
        .update({deleted_at: knex.fn.now()})

        if(response == undefined) {
            return {status: Response404.status, response: response, message: Response404.message};
        } else {
            return {status: Response200.status, response: "Removido com sucesso", message: Response200.message};
        }
    }
}