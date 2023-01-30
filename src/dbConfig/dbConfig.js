const mongoose = require("mongoose");

// const uri = "mongodb+srv://william:xvOAqgQ2f6mDueep@cluster0.ea85qd9.mongodb.net/cadastroPc?retryWrites=true&w=majority"
const uri = "mongodb+srv://william:xvOAqgQ2f6mDueep@cluster0.ea85qd9.mongodb.net/?retryWrites=true&w=majority"
const url = "mongodb+srv://william:uL4Hn7ciZlQyRXF4@cluster0.rg3hyyd.mongodb.net/cadastroPc?retryWrites=true&w=majority"

const connection = async()=>{
  console.log("Esperando para conectar com o Mongoose");
  try {        
  mongoose.set("strictQuery", true);
  await mongoose.connect(
    url
     )          
      console.log("Conectado com o mongoose.");
      // xvOAqgQ2f6mDueep
} catch (error) {
  console.log(`Erro: ${error}`);
}
}
module.exports = connection;