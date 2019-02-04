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


var Profiler = mongoose.model('Profiler', ProfilerSchema);

module.exports = {Profiler};