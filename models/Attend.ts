import Hour from "../database/migrations/Hour";
import Attend from "../database/migrations/Attend";

import DateUtil from "../utils/DateUtil";
const DateNow = new DateUtil();

const { check, validationResult }  = require('express-validator/check');

export default class AttendModel {


    public getAvaliableAttend() {
        const {start, end} = DateNow.getNow();

        Hour.findAll({
            include: [{
              model: Attend,
              where: {
                hourId: null,
                avaliable: 1
              }
             }]
        }).then(hours => {
        return hours;
        }).catch(err => {
            return err;
        })
    }

    public getAll() {
        Attend.findAll()
        .then(attends => {
            return attends;
        })
        .catch(err => {
            return err;
        });
    }

    public getById(Request: any, Response: any) {
        const {id} = Request;

        Attend.findByPk(id)
        .then(attend => {
            return attend;
        })
        .catch(err => {
            return err;
        })
    }

    public async save(Request: any) {
        
    }

    public async delete(Request: any) {
        
    }
}
