const express = require("express");


const router = express.Router();
const Hour = require('./Hour');

// findAll
router.get("/admin/hour", (req, res) => {
    Hour.findAll().then((dbHour) => {
        res.json({status: 200, response: dbHour});
    }).catch(err => {
        res.status(500).json({response: err.name});
    });
});

// findby id
router.get("/admin/hour/:id", (req, res) => {
    const param_id = req.params.id; 

    if(param_id == undefined || isNaN(param_id)) {
        res.status(401).json({response: "ID NOT FOUND"});
    }

    Hour.findByPk(param_id).then(dbHour => {  
        res.json({status: 200, response: dbHour});
    }).catch(err => {
        res.json({status: 500, response: err.message});
    });

});

// create
router.post("/admin/hour/save", (req, res) => {
    const request = req.body; 

    if(!Array.isArray(request.hours)) {
        res.status(401).json({response: "ID NOT FOUND"});
    }

    try {
        
        request.hours.forEach(hour => {
            let dateNow = new Date(hour);

            Hour.create({
                hour: dateNow
            }).then(dbResponse => {
                res.status(201).json({response: dbResponse});
            }).catch((err) => {
                res.status(500).json({response: err.name});
            });
        });
    } catch(err) {
        res.json({status: 500, response: "server processing error"});
    }
   
});

// update
router.put("/admin/hour/update", (req, res) => {
    const request_body = req.body; 

    if(request_body.id == undefined || isNaN(request_body.id)) {
        res.json({status: 404, response: "id not found"});
    }

    Hour.findByPk(request_body.id).then(dbResponse => {
        if(dbResponse == undefined) {
            res.status(401).json({response: "ID NOT FOUND"});
        } else {
            dbResponse.update({
                hour: request_body.hour
            }).then((dbResponse) => {
                res.status(201).json({response: dbResponse});
            }).catch((err) => {
                res.status(500).json({response: err.name});
            }) 
        }
    });

});

// delete
router.delete("/admin/hour/delete", (req, res) => {
    const request_body = req.body;

    Hour.findByPk(request_body.id).then(dbResponse => {
        if(dbResponse == undefined) {
            res.status(401).json({response: "ID NOT FOUND"});
        } else {
            dbResponse.destoy();
            res.status(200).json({response: `ID: ${request_body.id} HAS DELETED`});
        }
    });

});

module.exports = router;
