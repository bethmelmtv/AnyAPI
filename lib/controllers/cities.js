const { Router } = require('express');
const City = require('../models/City');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingCity = await City.getById(id);
    res.json(matchingCity);
  })

  .get('/', async (req, res) => {
    const getAllCities = await City.getAll();
    res.json(getAllCities);
  });
