const express = require('express');

module.exports = function(server) { /*passar alguma informação para um modulo dentro do node*/

	//API ROUTES
	const router = express.Router();
	server.use('/api', router);

	//rotas da API
	const billingCycleService = require('../api/billingCycle/billingCycleService')
	billingCycleService.register(router, '/billingCycles')
}