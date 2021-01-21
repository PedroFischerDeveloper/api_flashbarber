import * as express from "express";

import AttendModel from '../../Models/Attend'
import HourModel from '../../Models/Hour'

const Attend = new AttendModel();


export default class AttendController {

    public async getAvaliable(Response: any) {
        const response:any =  await Attend.getAvaliableAttend(); 
        return Response.status(200).json({response: response});
    }

    public async getAll(Response: any) {
        const response:any =  await Attend.getAll(); 
        return Response.status(200).json({response: response});
    }

    public async save(Request: any, Response: any) {
        const response:any =  await Attend.save(Request); 
        return Response.status(200).json({response: response});
    }

    public async delete(Request: any, Response: any) {
        const response:any =  await Attend.delete(Request);
        return Response.status(200).json({response: response});
    }

}
