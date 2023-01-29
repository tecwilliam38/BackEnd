const connection = require('./dbConfig/dbConfig');

class Loaders{
start(){
    connection();
}
}

module.exports = new Loaders;