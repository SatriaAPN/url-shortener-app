const mongoose = require('mongoose');

//connecting to the database
if(process.env.NODE_ENV === 'production'){
    mongoose.connect(process.env.MONGO_URI_PROD, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.on('connected', () => {
        console.log('Production database connected');
    });
} else if(process.env.NODE_ENV === 'development') {
    mongoose.connect(process.env.MONGO_URI_DEV, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.on('connected', () => {
        console.log('Development database connected');
    });
}