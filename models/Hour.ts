import Hour from "../database/migrations/Hour";

export default class HourModel {

    public async getAll() {

        Hour.findAll().then((hours) => {
            return hours;
        }).catch(err => {
            return err;
        });
    }

    public async getById(Request: any) {

        const {id} = Request;

        Hour.findByPk(id).then((hour) => {
            return hour;
        }).catch(err => {
            return err;
        });
    }

    public async save(Request: any) {
        const {hours} =  Request;

        hours.forEach(hour => {
            let dateNow = new Date(hour);

            Hour.create({
                hour: dateNow
            }).then(hours => {
                return hours;
            }).catch((err) => {
                return err
            });
        });
    }

    public async update(Request: any) {
        const {hour, id} = Request; 

        if(id == undefined || isNaN(id)) {
            return {response: 404, message: 'ID não informado'};
        }
    
        Hour.findByPk(id).then(hour => {
            
            if(hour == undefined) {
                return {response: 404, message: 'Recurso não localizado'};
            } else {
                hour.update({
                    hour: hour
                }).then((dbResponse) => {
                    return dbResponse;
                }).catch((err) => {
                    return err
                }) 
            }
        });
    }

    public async delete(Request: any) {
        const {id} = Request;

        Hour.findByPk(id).then(hour => {
            if(hour == undefined) {
                return {response: null, message: "Recurso não encontrado!"};
            } else {
                hour.destoy();
                return {response: true, message: "Recurso deletado com successo!"};
            }
        });
    }

}
