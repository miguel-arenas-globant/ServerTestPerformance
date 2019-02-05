var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://userTest:test1234@ds221155.mlab.com:21155/testperformanceprofiler', { useNewUrlParser: true });

module.export ={
    mongoose
}
