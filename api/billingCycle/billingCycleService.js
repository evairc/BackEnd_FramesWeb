const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']); /*Serviços*/

BillingCycle.updateOptions({new: true, runValidators: true}); /*Atualizar o novo no primmeiro Click e Validar (billingC..)*/

BillingCycle.route('count', function(req,res,next) {
	BillingCycle.count(function(error,value) {
		if(error){
			res.status(500).json({errors: [erro]})
		} else {
			res.json({value})
		}
	})
})

module.exports = BillingCycle;