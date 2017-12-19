'use strict';

var Store = require("jfs");
var db = new Store("patientdata",{type:'memory',saveId:'id'});

exports.list_all_patients = function(req, res) {
    //var objs = db.allSync();
    db.all(function(err, objs){
        var vals = [];
        for (var i in objs)
             vals.push(objs[i]);
        res.json(vals);
      });
    

};

exports.create_a_patient = function(req, res) {
    console.log('create patient called '+req.body);
    var patientdata  = req.body;
    db.save(patientdata, function(err, id){
        if (err)
            res.send(err);
        res.json(db.getSync(id));
      });
      
  };

  exports.get_patient_demographics = function(req,res) {
        db.all(function(err,objs) {
            var vals = [];
            for (var i in objs)
                vals.push(objs[i])
            res.json(vals)
        });
  };
