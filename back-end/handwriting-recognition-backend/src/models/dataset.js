const mongoose = require('mongoose');

const datasetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  filePath: {
    type: String,
    required: true,
  },
  labels: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the model
module.exports = mongoose.model('Dataset', datasetSchema);




// Function to upload a dataset
exports.uploadDataset = async (req, res) => {
    try {
      const { name, description, labels } = req.body;
      const filePath = req.file.path; // Uploaded file path
  
      const dataset = new Dataset({
        name,
        description,
        filePath,
        labels
      });
  
      await dataset.save();
      res.status(201).json({ message: 'Dataset uploaded successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  