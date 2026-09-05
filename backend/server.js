// Entry point
const env = require('./config/env');
const app = require('./app');
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

const PORT = env.PORT;

const server = app.listen(PORT, () => {
  console.log(`🚀 Resume Analyzer Server running in ${env.NODE_ENV} mode on http://localhost:${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
});

module.exports = server;
