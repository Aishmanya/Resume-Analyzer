// Auth routes
const express = require('express');
const router = express.Router();

// Placeholder route: GET /api/auth
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Auth routes placeholder'
  });
});

module.exports = router;
