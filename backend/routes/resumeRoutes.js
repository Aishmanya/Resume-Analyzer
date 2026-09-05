// Resume routes
const express = require('express');
const router = express.Router();

// Placeholder route: GET /api/resume
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Resume routes placeholder'
  });
});

module.exports = router;
