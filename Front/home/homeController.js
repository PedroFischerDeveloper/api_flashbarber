const express = require("express");

const router = express.Router();
const Attend = require('../../Models/Attend');

router.get("/:id",(req, res) => {
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

router.get("/page/:id",(req, res) => {
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

module.exports = router;