//importar o mongoose
const mongoose = require('mongoose')
//scripts de conexão
const conn = async () => {
    const atlas = await mongoose.connect('mongodb+srv://userLR:matheus2207@fiaptecnico.ekwgy.mongodb.net/dblr')
}

//exportar as informações para acesso externo
module.exports = conn
