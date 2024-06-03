                       
var express = require('express');
var router = express.Router();
var clientController = require("../src/client/clientController");
router.post('/client/login', clientController.loginclientControllerfn);
router.post('/client/create', clientController.CreateclientControllerfn);

module.exports = router;