var mongoose = require('mongoose');

var ProfilerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    cat:{
        type: String
    },
    ph:{
        type: String
    },
    pid:{
        type: String
    },
    tid:{
        type: Number
    },
    ts:{
        type: String
    }
});

module.exports = {ProfilerSchema};