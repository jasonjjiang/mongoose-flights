const Flight = require('../model/flights')

module.exports = {
    new: newFlight,
    index,
    create,
    show
     
}

function newFlight(req, res) {
    res.render('flights/new', {errorMsg: ''})
}

async function index(req,res) {
    const flights = await Flight.find ({})
     res.render('flights/index', {flights: flights})
}

async function create(req,res) {
  try {
    const flight = new Flight(req.body);
    await flight.save();
    res.redirect('/flights');
  } catch (err) {

    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  } }

async function show(req,res) { 
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', { title: 'Flight Detail', flight});
  } 
