const express = require("express");

const { check, validationResult }  = require('express-validator/check');


const router = express.Router();
const Attend = require('../../Models/Attend');
const { Op } = require("sequelize");
const { route } = require("../hours/hourCrontroller");

router.get("/admin/attends/avaliable", (req, res) => {

    const {start, end} = getNow();
    
    Attend.findAll(
        {
            where: {
                avaliable: true,
                createdAt: {
                    [Op.between]:[start, end]
                }
            }
        }
    ).then(dbResponse => {
        res.status(200).json({response: dbResponse});
    }).catch(err => {
        res.status(500).json({response: err});
    })
});

router.get("/admin/attends/page/:id", (req, res) => {
    let page = req.params.num; 
    let offset = 0;
    let limit = 5;

    if(isNaN(limit) || limit <= 5) {
        limit = 5;
    }

    if(isNaN(page) || page == 1) {
        offset = 0;
    } else {
        offset = (parseInt(page) - 1 ) * 5;
    }
    Attend.findAndCountAll({
        limit: limit,
        offset: offset, 
        order:[
            ['id', 'desc']
        ],
    }).then(attend => {
        
        let next;

        if(offset + 5 > attend.count) {
            next = false;
        } else {
            next = true;
        }

        let response = {
            attend: attend,
            next: next, 
            page: parseInt(page)
        }

        res.status(200).json({response: response});

    }).catch(err => {
        res.status(500).json({response: err.name});
    });
});

router.get("/admin/attends/:id",(req, res) => {
    const request = req.params;
    
    if(request.id == undefined) {
        res.status(400).json({response: "Id não pode ser nulo"});
    };

    if(isNaN(request.id)) {
        res.status(400).json({response: "Id precisa ser um número"});
    };

    Attend.findOne(
        {
            where:{
                id: request.id,
                deleted: 0,
            }
        }
        ).then((dbResponse) => {
        res.status(200).json({response: dbResponse});
    }).catch((err) => {
        res.status(500).json({response: err.name});
    });

});

const getNow = () => {

    let myDate = new Date();
    let myDate_string = myDate.toISOString();
    myDate_string = myDate_string.replace("T"," ");
    myDate_string = myDate_string.substring(0, myDate_string.length - 5);

    tomorrowToFormat = myDate_string.split(" ");

    endDay   = tomorrowToFormat[0] + " 23:59:59";
    startDay = tomorrowToFormat[0] + " 10:00:00";

    return {start: startDay, end: endDay};
}

router.post("/admin/attends/define/avaliable", 
[ 
    check("hourId").not().isEmpty().withMessage('Horário não pode ser nulo')
],(req, res) => {
    
    const {hourId} = req.body;
    
    hourId.forEach(hour => {
        Attend.create({
            deleted: 0,
            avaliable: 1,
            hourId: hour
        }).then(dbResponse => {
            res.status(200).json({response: dbResponse});
        }).catch(err => {
            res.status(500).json({response: err});
        }); 
    });

});

router.put("/admin/attends/update", [
    check("name").not().isEmpty().isLength({min: 5, max: 60}).withMessage('Nome não pode ser nulo, minímo de 5 caracteres e máximo de 60 caracteres'),
    check("email").not().isEmpty().withMessage('E-mail não pode ser nulo'),
    check("phone").not().isEmpty().withMessage('Telefone não pode ser nulo'),
    check("phone").custom(value => {
        value = value.replace("(", "");
        value = value.replace(")", "");
        value = value.replace("-", "");
        value = value.replace(" ", "");

        if(value == "0000000000") {
            return Promise.reject('Telefone inválido');
        } else if(value == "00000000000") {
            return Promise.reject('Telefone inválido');
        } else if(value == "99999999999") {
            return Promise.reject('Telefone inválido');
        } else if(value == "11111111111") {
            return Promise.reject('Telefone inválido');
        } else if(value == "22222222222") {
            return Promise.reject('Telefone inválido');
        } else if(value == "33333333333") {
            return Promise.reject('Telefone inválido');
        } else if(value == "44444444444") {
            return Promise.reject('Telefone inválido');
        } else if(value == "55555555555") {
            return Promise.reject('Telefone inválido');
        } else if(value == "66666666666") {
            return Promise.reject('Telefone inválido');
        } else if(value == "77777777777") {
            return Promise.reject('Telefone inválido');
        } else if(value == "88888888888") {
            return Promise.reject('Telefone inválido');
        } 
        return true
    }),
    check("id").not().isEmpty().withMessage('Horário não pode ser nulo'),
], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {id, name, phone, email} = req.body;

    Attend.findByPk(id)
    .then(dbResponse => {
        if(dbResponse == undefined) {
            res.status(404).json({response: "Horário não existe"});
        } else {
            dbResponse.update({
                name, 
                phone, 
                hourId,
                avaliable: 0,
                email
            });
            res.status(200).json({response: dbResponse, message: "agendado com sucesso!"});
        }
    })
    .catch(err => {
        res.status(404).json({response: err.name});
    })


});

router.delete("/admin/attends/delete", [check("hourId").not().isEmpty().withMessage('Horário não pode ser nulo')] ,(req,res) => {
    const {hourId} = req.body; 

    Attend.findOne(
        {
            where: {
                hourId:hourId 
            }
        }
    ).then((dbResponse) => {
        
        if(dbResponse == undefined) {
            res.status(404).json({response: "Não localizado"}); 
        } else {
            dbResponse.update({
                deleted: 1
            });
            res.status(200).json({response: dbResponse, message: "Deletado com sucesso"}); 
        }

    })
     .catch((err)=>{
        res.status(500).json({response: err.name, message: "Erro de servidor"});
     })    
});

module.exports = router;
