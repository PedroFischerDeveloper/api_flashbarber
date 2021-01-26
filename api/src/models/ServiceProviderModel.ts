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
import Pagination from '../utils/Paginate';

export default class ServiceProviderModel {
    paginate: any; 
    
    constructor() {
        this.paginate = new Pagination();
    }

    async getPaginate(perpage, offset, page) {
        const response = this.paginate.paginate("tb_service_provider", perpage, offset, page);
        return {status: Response200.status, response: response, message: Response200.message};
    }

    async getById(req) {
        const {cd_provider} = req.params;
        const response = await knex('tb_service_provider')
        .select('cd_provider', 'nm_provider', 'ds_email')
        .where({cd_provider: cd_provider})        
        if(response == undefined) {
            return {status: Response404.status, response: response, message: Response404.message};
        } else {
            return {status: Response200.status, response: response, message: Response200.message};
        }

    }

    async save(req) {
        
        const {nm_provider, ds_email, cd_password} = req.body;

        try {
            const cripto = new Criptograph();
          
            const hashPassword = cripto.criptograph(cd_password);
           
            const response = await knex('tb_service_provider').insert({
                nm_provider,
                ds_email, 
                cd_password:hashPassword
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
        const {cd_provider, nm_provider, ds_email, cd_phone} = req.body;

        const response = await knex('tb_service_provider')
        .where({cd_provider: cd_provider})
        .update({
            nm_provider,
            ds_email
        })

        if(response == undefined) {
            return {status: Response404.status, response: response, message: Response404.message};
        } else {
            return {status: Response200.status, response: "Atualizado com sucesso", message: Response200.message};
        }
    }

    async delete(req) {
        const {cd_provider} = req.body;

        const response = await knex('tb_service_provider')
        .where({cd_provider: cd_provider})
        .update({deleted_at: knex.fn.now()})

        if(response == undefined) {
            return {status: Response404.status, response: response, message: Response404.message};
        } else {
            return {status: Response200.status, response: "Removido com sucesso", message: Response200.message};
        }
    }
}