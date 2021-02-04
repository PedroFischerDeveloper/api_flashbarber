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

export default class DayModel {
    paginate: any; 
    
    constructor() {
        this.paginate = new Pagination();
    }
  
    async getById(req) {
        const {cd_day} = req.params;

        const response = await knex('tb_day_provider')
        .where({cd_dayProvider:cd_day})
       

        if(response == undefined) {
            return {status: Response404.status, response: response, message: Response404.message};
        } else {
            return {status: Response200.status, response: response, message: Response200.message};
        }
    }

    async save(req) {

        const {
            ds_monday,
            ds_tuesday,
            ds_wednesday,
            ds_thursday,
            ds_friday,
            ds_saturday,
            cd_provider_id
        } = req.body;

        try {
            
            const response = await knex('tb_day_provider')
            .insert({
                ds_monday,
                ds_tuesday,
                ds_wednesday,
                ds_thursday,
                ds_friday,
                ds_saturday,
                cd_provider_id
            });

            return {status: Response201.status, response: response, message: Response201.message};

        }catch(err) {
            
            return {status: Response500.status, response: err.name, message: Response500.message};
        }
    }

    async update(req) {
        try {
            const {
                ds_monday,
                ds_tuesday,
                ds_wednesday,
                ds_thursday,
                ds_friday,
                ds_saturday,
                cd_dayProvider
            } = req.body;

            const response = await knex('tb_day_provider')
            .where({cd_dayProvider: cd_dayProvider})
            .update({
                ds_monday,
                ds_tuesday,
                ds_wednesday,
                ds_thursday,
                ds_friday,
                ds_saturday
            })

       
             return {status: Response200.status, response: "Atualizado com sucesso", message: Response200.message};
        }catch(err) {
                
            return {status: Response500.status, response: err.name, message: Response500.message};
        }
    }

    async delete(req) {
        const {cd_dayProvider} = req.body;

        const response = await knex('tb_day_provider')
        .where({cd_dayProvider: cd_dayProvider})
        .update({deleted_at: knex.fn.now()})

        if(response == undefined) {
            return {status: Response404.status, response: response, message: Response404.message};
        } else {
            return {status: Response200.status, response: "Removido com sucesso", message: Response200.message};
        }
    }
}