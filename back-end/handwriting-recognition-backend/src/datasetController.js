const http = require('http'); 

const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const Dataset = require('../models/dataset.js');


const server = http.createServer((req, res)=>{
    res.statusCode = 200;

    
})

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

// Function to get a list of datasets
exports.getAllDatasets = async (req, res) => {
  try {
    const datasets = await Dataset.find();
    res.status(200).json(datasets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Function to get details of a specific dataset by ID
exports.getDatasetById = async (req, res) => {
  try {
    const dataset = await Dataset.findById(req.params.id);
    if (!dataset) {
      res.status(404).json({ message: 'Dataset not found' });
    } else {
      res.status(200).json(dataset);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
