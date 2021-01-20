const express = require("express");

const router = express.Router();
const Attend = require('../../Models/Attend');

router.get("/atendimento", (req, res) => {
    Attend.findAll(
        {
            where: {
                deleted: 0
            }
        }
        ).then((dbResponse) => {
        res.status(200).json({response: dbResponse});
    }).catch((err) => {
        res.status(500).json({response: err.name});
    })
});

router.get("atendimento/:id",(req, res) => {
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
                deleted: 0
            }
        }
        ).then((dbResponse) => {
        res.status(200).json({response: dbResponse});
    }).catch((err) => {
        res.status(500).json({response: err.name});
    });

});

module.exports = router;