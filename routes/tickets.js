const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// GET /flights/:id/tickets/new (new functionality)
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
// POST /flights/:id (create functionality)
router.post('/flights/:id', ticketsCtrl.addToFlight);
// POST /flights/:id/tickets
router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;