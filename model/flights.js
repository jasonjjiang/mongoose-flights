const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({ 
    airport: {
        type: String,
        enum: ['DFW', 'ATL', 'MIA']
    },
    arrival: {
        type: Date
    }
}, {
    timestamps: true
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American Airlines', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['LAX', 'JFK', 'ORD' ]
    },
    flightNo: {
        type:Number,
        min: 10,
        max:9999
    },
    departs: {
        type: Date
    },
    destinations: {type: [destinationSchema], default: []}
}, {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema)