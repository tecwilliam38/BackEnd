const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const cadastroSchema = new Schema({
    id: ObjectId,
    asset: String,
    serviceTag: String,
    user: String,
    status: String,
    garantia: String,
    reservado: String,
    msg: String,    
    disp: String
})

const CadastroModel = mongoose.model("cadastroPc", cadastroSchema)
module.exports = CadastroModel;


