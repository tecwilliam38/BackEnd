const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const cadastroUserSchema = new Schema({
    id: ObjectId,
    user: String,
    company: String,
    phone: Number,
    ceo: String,
    mail: String,
    skill: String,
    passWord: String
})

const CadastroUserModel = mongoose.model("cadastrousuario", cadastroUserSchema)
module.exports = CadastroUserModel;


