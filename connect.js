const mongoose = require('mongoose');

mongoose.connect('mongodb://test_user:test_password@127.0.0.1:27017/test_db').then(() => {
    console.log('Database connected...');
})