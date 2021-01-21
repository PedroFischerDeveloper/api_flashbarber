
export default function attendValidator (req: any, res: any, next: any){
    const {name, phone, email, hourId} = req;

    if(name == undefined) {
        res.status(404).json({response: "Nome não pode ser nulo"});
    }

    if(phone == undefined) {
        res.status(404).json({response: "Telefone não pode ser nulo"});
    } else {
        let toFormatPhone =  "";

        toFormatPhone = phone.replace("(", "");
        toFormatPhone = phone.replace(")", ""); 
        toFormatPhone = phone.replace("-", "");
        toFormatPhone = phone.replace(" ", "");
        
        if(toFormatPhone == "00000000000") {
            res.status(400).json({response: "Telefone inválido"});
        } else if(toFormatPhone == "0000000000") {
            res.status(400).json({response: "Telefone inválido"});
        } else if(toFormatPhone == "111111111111") {
            res.status(400).json({response: "Telefone inválido"});
        } else if(toFormatPhone == "222222222222") {
            res.status(400).json({response: "Telefone inválido"});
        } else if(toFormatPhone == "333333333333") {
            res.status(400).json({response: "Telefone inválido"});
        } else if(toFormatPhone == "444444444444") {
            res.status(400).json({response: "Telefone inválido"});
        } else if(toFormatPhone == "555555555555") {
            res.status(400).json({response: "Telefone inválido"});
        } else if(toFormatPhone == "666666666666") {
            res.status(400).json({response: "Telefone inválido"});
        } else if(toFormatPhone == "777777777777") {
            res.status(400).json({response: "Telefone inválido"});
        } else if(toFormatPhone == "888888888888") {
            res.status(400).json({response: "Telefone inválido"});
        } else if(toFormatPhone == "999999999999") {
            res.status(400).json({response: "Telefone inválido"});
        }
    }

    if(email == undefined) {
        res.status(404).json({response: "E-mail não pode ser nulo"});
    }

    if(hourId == undefined) {
        res.status(404).json({response: "Horário não pode ser nulo"});
    }
}
