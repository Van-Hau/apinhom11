'use strict';
module.exports = function(app) {
  let kqxsCtrl = require('./controllers/KQXSController');
  let factCtrl= require('./controllers/FactController');
  let dataCtrl= require('./controllers/DataController');
  let areaCtrl= require('./controllers/AreaController');
  let provinceCtrl= require('./controllers/ProvinceController');
  let awardCtrl= require('./controllers/AwardContrller');
  let dateCtrl= require('./controllers/DateController');
  let logCtrl= require('./controllers/LogController');
  let configCtrl= require('./controllers/ConfigController');
  
  // Area
  app.route('/area/gets')
  .get(areaCtrl.getAll);
  app.route('/area/get/:id')
  .get(areaCtrl.get);
  app.route('/area/update/:id')
  .put(areaCtrl.update);
  app.route('/area/delete/:id')
  .delete(areaCtrl.delete);
  app.route('/area/insert')
  .post(areaCtrl.insert);
  // Award
    app.route('/award/gets')
    .get(awardCtrl.getAll);
    app.route('/award/get/:id')
    .get(awardCtrl.get);
    app.route('/award/update/:id')
    .put(awardCtrl.update);
    app.route('/award/delete/:id')
    .delete(awardCtrl.delete);
    app.route('/award/insert')
    .post(awardCtrl.insert);
  // Config
    app.route('/config/gets')
    .get(configCtrl.getAll);
    app.route('/config/get/:id')
    .get(configCtrl.get);
    app.route('/config/update/:id')
    .put(configCtrl.update);
    app.route('/config/delete/:id')
    .delete(configCtrl.delete);
    app.route('/config/insert')
    .post(configCtrl.insert);
  // Data
  app.route('/data/gets')
  .get(dataCtrl.getAll);
  app.route('/data/get/:id')
  .get(dataCtrl.get);
  app.route('/data/getByDate/:date/:area')
  .get(dataCtrl.getByDate);
  app.route('/data/getByProvince/:date/:province')
  .get(dataCtrl.getByProvince);
  app.route('/data/getByArea/:area')
  .get(dataCtrl.getByArea);
  app.route('/data/update/:id')
  .put(dataCtrl.update);
  app.route('/data/delete/:id')
  .delete(dataCtrl.delete);
  app.route('/data/insert')
  .post(dataCtrl.insert);
  // Date
    app.route('/date/gets')
    .get(dateCtrl.getAll);
    app.route('/date/get/:id')
    .get(dateCtrl.get);
    app.route('/date/update/:id')
    .put(dateCtrl.update);
    app.route('/date/delete/:id')
    .delete(dateCtrl.delete);
    app.route('/date/insert')
    .post(dateCtrl.insert);
  // KQXS
  app.route('/kqxs/gets')
  .get(kqxsCtrl.getAll);
  app.route('/kqxs/get/:id')
  .get(kqxsCtrl.get);
  app.route('/kqxs/update/:id')
  .put(kqxsCtrl.update);
  app.route('/kqxs/delete/:id')
  .delete(kqxsCtrl.delete);
  app.route('/kqxs/insert')
  .post(kqxsCtrl.insert);
  // Log
  app.route('/log/gets')
  .get(logCtrl.getAll);
  app.route('/log/get/:id')
  .get(logCtrl.get);
  app.route('/log/getByStatus/:status')
  .get(logCtrl.getByStatus);
  app.route('/log/update/:id')
  .put(logCtrl.update);
  app.route('/log/delete/:id')
  .delete(logCtrl.delete);
  app.route('/log/insert')
  .post(logCtrl.insert);
  // Province
  app.route('/province/gets')
  .get(provinceCtrl.getAll);
  app.route('/province/get/:id')
  .get(provinceCtrl.get);
  app.route('/province/update/:id')
  .put(provinceCtrl.update);
  app.route('/province/delete/:id')
  .delete(provinceCtrl.delete);
  app.route('/province/insert')
  .post(provinceCtrl.insert);
  // Fact
  app.route('/fact/gets')
  .get(factCtrl.getAll);
  app.route('/fact/get/:id')
  .get(factCtrl.get);
  app.route('/fact/getByProvince/:province')
  .get(factCtrl.getByProvince);
  app.route('/fact/getByArea/:area')
  .get(factCtrl.getByArea);
  app.route('/fact/getByDate/:date')
  .get(factCtrl.getByDate);
  app.route('/fact/update/:id')
  .put(factCtrl.update);
  app.route('/fact/delete/:id')
  .delete(factCtrl.delete);
  app.route('/fact/insert')
  .post(factCtrl.insert);
};