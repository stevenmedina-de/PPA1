const mongoose = require('mongoose');

mongoose.connect('mongodb://master:password0@ds129233.mlab.com:29233/ppa2', { useNewUrlParser: true })
    .then(() => console.log('Database connected...'))
    .catch((err) => console.err(err))