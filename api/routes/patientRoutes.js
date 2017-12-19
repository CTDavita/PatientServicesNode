'use strict';
module.exports = function(app) {
  var patientList = require('../controllers/patientController');


  app.route('/patients')
    .get(patientList.list_all_patients)
    .post(patientList.create_a_patient)
    .get(patientList.get_patient_demographics);


  /*app.route('/patients/:patientId')
    .get(patientList.get_a_patient)
    .delete(patientList.delete_a_patient);*/
};