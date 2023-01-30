const mongoose = require("mongoose");

// const uri = "mongodb+srv://william:xvOAqgQ2f6mDueep@cluster0.ea85qd9.mongodb.net/cadastroPc?retryWrites=true&w=majority"
const uri = "mongodb+srv://william:xvOAqgQ2f6mDueep@cluster0.ea85qd9.mongodb.net/?retryWrites=true&w=majority"
const url = "mongodb+srv://william:uL4Hn7ciZlQyRXF4@cluster0.rg3hyyd.mongodb.net/?retryWrites=true&w=majority"

async function vascp() {
  mongoose.set("strictQuery", true)
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err) => {
    // if(err) console.log("Connect error to MongoDB");
    if (err) throw new Error("Connect error to MongoDB");
    console.log("MongoDB connected!");
  });
}

async function botafogo() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoBd!'));
}
function vasco() {
  console.log("Esperando para conectar com o Mongoose");
  mongoose.set("strictQuery", true);
  mongoose
  .connect(uri,  
    { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Mongodb Atlas conected!"))
    .catch((err) => console.log(err))
}
// uL4Hn7ciZlQyRXF4
const connection = async()=>{
  console.log("Esperando para conectar com o Mongoose");
  try {        
  mongoose.set("strictQuery", true);
  await mongoose.connect(
    "mongodb+srv://william:uL4Hn7ciZlQyRXF4@cluster0.rg3hyyd.mongodb.net/?retryWrites=true&w=majority"
     )          
      console.log("Conectado com o mongoose.");
      // xvOAqgQ2f6mDueep
} catch (error) {
  console.log(`Erro: ${error}`);
}
}
module.exports = connection;