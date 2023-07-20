const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
    index,
    show,
    new: newFlight,
    create
};

async function index(req, res) {
    const flights = await Flight.find({});
    res.render("flights/index", { title: "All Flights", flights });
};

async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  const ticket = await Ticket.find({flight: flight._id});
  try {
    res.render("flights/show", { title: "Flight Detail", flight, ticket })
  }
  catch(e) {
    console.log(e)
  }   
};

function newFlight(req, res) {
  res.render('flights/new', {errorMsg: ''})
}

async function create(req, res) {
    // Remove empty properties so that defaults will be applied
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    try {
      await Flight.create(req.body);
      // Always redirect after CRUDing data
      // We'll refactor to redirect to the flights index after we implement it
      res.redirect('/flights');
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('flights/new', { errorMsg: err.message });
    }
  }