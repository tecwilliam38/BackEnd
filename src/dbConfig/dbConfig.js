const mongoose = require("mongoose");

// const uri = "mongodb+srv://william:xvOAqgQ2f6mDueep@cluster0.ea85qd9.mongodb.net/cadastroPc?retryWrites=true&w=majority"
const uri = "mongodb+srv://william:xvOAqgQ2f6mDueep@cluster0.ea85qd9.mongodb.net/?retryWrites=true&w=majority"


  async function connection() {
    mongoose.set("strictQuery", true)
    await mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true        
      },(err) => {
         if(err) throw new Error("Connect error to MongoDB");
        console.log("MongoDB connected!");
      });
  }

  async function Vasco() {
    mongoose.set("strictQuery", true);
    await mongoose.connect(uri)
      .then(() => console.log('Connected!'));
  }

module.exports = connection;