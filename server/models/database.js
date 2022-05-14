const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Recipes',
 { useNewUrlParser: true, useUnifiedTopology: true },err => {
    if(err) 
        console.log(err);
    } );

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});

// Models
require('./Category');
require('./Recipe');