const express = require("express");

const { check, validationResult }  = require('express-validator/check');

const router = express.Router();
const Attend = require('./Attend');

router.get("/admin/attends", (req, res) => {
    Attend.findAll().then((dbResponse) => {
        res.status(200).json({response: dbResponse});
    }).catch((err) => {
        res.status(500).json({response: err.name});
    })
});

router.get("/admin/attends/:id",(req, res) => {
    const request = req.params;
    
    if(request.id == undefined) {
        res.status(400).json({response: "Id não pode ser nulo"});
    };

    if(isNaN(request.id)) {
        res.status(400).json({response: "Id precisa ser um número"});
    };

    Attend.findByPk(request.id).then((dbResponse) => {
        res.status(200).json({response: dbResponse});
    }).catch((err) => {
        res.status(500).json({response: err.name});
    });

});

router.post("/admin/attends/save", 
[
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
    check("hourId").not().isEmpty().withMessage('Horário não pode ser nulo'),
], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {name, email, phone, hourId} = req.body;

    Attend.findOne({where: {hourId:1}}).then(dbResponse => {
        
        if(dbResponse != undefined) {
            res.status(400).json({response: "Horário indisponível"});
        } else {

            Attend.create({
                name, 
                email, 
                phone, 
                hourId
            }).then(dbResponse => {
                res.status(201).json({message: "Horário marcado com sucesso"});
            }).catch(err => {
                res.status(500).json({message: err.name});
            });
        }

    }).catch(err => {
        res.status(500).json({response: err.name});
    })
  
  
});

module.exports = router;
