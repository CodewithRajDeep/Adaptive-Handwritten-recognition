const express = require('express');
const router = express.Router();
const datasetController = require('../controllers/datasetController.js');

// Route for uploading a dataset
router.post('/upload-dataset', datasetController.uploadDataset);

// Route for getting a list of datasets
router.get('/datasets', datasetController.getAllDatasets);

// Route for getting details of a specific dataset by ID
router.get('/dataset/:id', datasetController.getDatasetById);

// Add more routes as needed for your project

module.exports = router;

const express = require('express');
const app = express();
const apiRoutes = require('./src/routes/api'); // Import your api.js file

// Set up your routes
app.use('/api', apiRoutes);

// Your other configuration and server setup code

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
