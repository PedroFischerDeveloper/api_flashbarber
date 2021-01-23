import knex from '../database/index';
import {
    Response200,
    Response201,
    Response401,
    Response404,
    Response500

} from '../responseStatus/responseStatus';

export default class ServiceProvider {

    public  async getAll() {

    }

    public  async save(req) {
        
        try {
            
            let {service_provider} = req.body;
            const response = await knex('service_provider').insert(service_provider);
            
            if(response == null || response.length <= 0) {
                return {status: Response404.status, response: {}, message: Response404.message};
            } else {
                return {status: Response201.status, response: response, message: Response201.message};
            }

        } catch(err) {
            return {status: Response500.status, response: err, message: Response500.message};
        }
    }

    public  async update(req) {

    }

    public  async delete(req) {

    }
}