const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({ 
    airport: {
        type: String,
        enum: ['ORD', 'JFK', 'SFO', 'LAX', 'DFW', 'MIA']
    },
    arrival: {
        type: Date
    },
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American Airlines', 'Southwest Airlines', 'United Airlines', 'Delta Airlines', 'Spirit' ]
    },
    airport: {
        type: String,
        enum: ['ORD', 'JFK', 'SFO', 'LAX', 'DFW', 'MIA']
    },
    flightNo: {
        type:Number,
        min: 10,
        max:9999
    },
    departs: {
        type: Date,
        min: Date.now()
    },
    destinations: {type: [destinationSchema], default: []}
}, {
   
});

module.exports = mongoose.model('Flight', flightSchema)