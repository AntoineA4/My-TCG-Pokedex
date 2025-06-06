const express = require('express');

const app = express();

const mongoose = require('mongoose');

app.use(express.json());
mongoose.connect('mongodb+srv://AntoineTCG29:Vu0jF8myADaZn8By@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
  

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use((req, res) => {
   res.json({ message: 'Votre requête a bien été reçue !' }); 
});

module.exports = app;