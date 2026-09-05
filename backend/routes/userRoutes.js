// User routes
const express = require('express');
const router = express.Router();

// Placeholder route: GET /api/user
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'User routes placeholder'
  });
});

module.exports = router;
