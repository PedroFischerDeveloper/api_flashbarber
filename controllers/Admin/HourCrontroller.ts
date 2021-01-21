import * as express from "express";

// import models
import Hour from "../../Models/Hour";
const ModelHour = new Hour();

export default class HourController {

    public async getAll(Request: any, Response: any) {
        const response = await ModelHour.getAll();
        return Response.json({response: response});
    }

    public async getById(Request: any, Response: any) {
        const response = await ModelHour.getById(Request);
        return Response.json({response: response});
    }


    public save(Request: any, Response: any) {
        const response = ModelHour.save(Request);
        return Response.json({response: response});
    }


    public update(Request: any, Response: any) {
        const response = ModelHour.update(Request);
        return Response.json({response: response});
    }


    public delete(Request: any, Response: any) {
        const response = ModelHour.delete(Request);
        return Response.json({response: response});
    }

}

