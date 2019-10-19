const mongoose = require('mongoose');

mongoose.connect('mongodb://user1:password1@127.0.0.1:27017/ppa2_db', { useNewUrlParser: true }).then(() => {
    console.log('Database connected...');
})