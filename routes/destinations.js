const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// All routes start with '/' (root)

// POST / Movies / :id / reviews
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;