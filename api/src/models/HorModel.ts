import knex from '../database/index';
import {
    Response200,
    Response201,
    Response401,
    Response404,
    Response500

} from '../responseStatus/responseStatus';

export default class HourModel<IHourIn> {
   
    async getAll() {
        try {
            const response = await knex('hours');
            
            if(response == null || response.length <= 0) {
                return {status: Response404.status, response: {}, message: Response200.message};
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
            const response = await knex('hours').where({id: id});
            
            if(response == null || response.length <= 0) {
                return {status: Response404.status, response: {}, message: Response200.message};
            } else {
                return {status: Response200.status, response: response, message: Response200.message};
            }

        } catch(err) {
            return {status: Response500.status, response: err, message: Response500.message};
        }
    }

    async save(req) {
        try {
            const {workHour} = req.body;
            const response = await knex('hours').insert(workHour)
            
            if(response == null || response.length <= 0) {
                return {status: Response404.status, response: {}, message: Response200.message};
            } else {
                return {status: Response201.status, response: response, message: Response200.message};
            }

        } catch(err) {
            return {status: Response500.status, response: err, message: Response500.message};
        }
    }

    async update(req) {

    }

    async delete(req) {

    }
}