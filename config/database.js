const mongoose = require('mongoose'); /*responsável pela comunicação do mongoDB*/

module.exports = mongoose.connect('mongodb://localhost/db_finance');

mongoose.Error.messages.general.required = "O atributo '{PATH} é obritatório."