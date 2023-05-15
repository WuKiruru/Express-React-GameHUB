const mongoose = require('mongoose');
const uri = "mongodb+srv://alejandro:MonlauAle@cluster0.zsf6459.mongodb.net/Games";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa'))
  .catch(err => console.error('Error de conexión: ', err));

module.exports = mongoose.connection;
