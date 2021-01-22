
export default class AttendController {

    public async getAvaliable(req: any, res: any) {
        return res.status(200).json({response: "ok"});
    }

    public async getAll(req: any, res: any) {
        return res.status(200).json({response: "ok"});
    }

    public async getById(req: any, res: any) {
        const {id} = req.params;
        return res.status(200).json({response: id});
    }

    public async post(req: any, res: any) {
        return res.status(200).json({response: req.body});
    }

    public async delete(req: any, res: any) {
        return res.status(200).json({response: req.body});
    }
}
