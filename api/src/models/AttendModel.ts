import knex from '../database/index';
import {
    Response200,
    Response201,
    Response401,
    Response404,
    Response500

} from '../responseStatus/responseStatus';


export default class AttendModel {

    async getAvaliable() {
        try {
            const DateToFormat = new Date();
           
            const today = DateToFormat.getFullYear() + "-" + DateToFormat.getMonth() + 1 + "-" + DateToFormat.getDate();
            const tomorrow = today; 

            const response = await knex.select('*')
            .from({ hou: 'hours' })
            .leftJoin({ att: 'tb_attends' }, 'att.hour_id', '=', 'hou.id')
            .whereNull('att.hour_id')
            
            console.log(response)
            if(response == null || response.length <= 0) {
                return {status: Response404.status, response: response, message: Response404.message};
            } else {
                return {status: Response200.status, response: response, message: Response200.message};
            }

        } catch(err) {
            console.log(err)
            return {status: Response500.status, response: err, message: Response500.message};
        }
    }

    async getAll() {
        try {
            const response = await knex('tb_attends');
            
            if(response == null || response.length <= 0) {
                return {status: Response404.status, response: {}, message: Response404.message};
            } else {
                return {status: Response200.status, response: response, message: Response200.message};
            }

        } catch(err) {
            return {status: Response500.status, response: err, message: Response500.message};
        }
    }

    async getById(req) {
        try {
            const {id} = req.params;
            const response = await knex('attends').where({id: id});
            
            if(response == null || response.length <= 0) {
                return {status: Response404.status, response: {}, message: Response200.message};
            } else {
                return {status: Response200.status, response: response, message: Response404.message};
            }

        } catch(err) {
            return {status: Response500.status, response: err, message: Response500.message};
        }
    }

    async save(req) {
        try {
            
            let {attend} = req.body;
            
            const dbResponse = await knex('users').insert({
                name: attend.name, 
                email: attend.email,  
                password: attend.password 
            });
            
            console.log(dbResponse)

            if(dbResponse == undefined || dbResponse.length <= 0) {
                return {status: Response500.status, response: attend, message: "Não foi possível recuperar o id"};
            } else {
                attend.user_id = dbResponse[0];
            }
            
            const response = await knex('attends').insert(attend)
            
            if(response == null || response.length <= 0) {
                return {status: Response404.status, response: {}, message: Response404.message};
            } else {
                return {status: Response201.status, response: response, message: Response201.message};
            }

        } catch(err) {
            return {status: Response500.status, response: err, message: Response500.message};
        }
    }

    async delete() {

    }
}