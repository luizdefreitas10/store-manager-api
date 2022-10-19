const productsService = require('../services/products.service');

const controllerGetAll = async (_req, res) => {
  const response = await productsService.serviceGetAll();
  res.status(200).json(response.message);
};

const controllerGetById = async (req, res) => {
  const { id } = req.params;
  const result = await productsService.serviceGetById(id);
  res.status(result.status).json(result.message);
 };

module.exports = {
  controllerGetAll,
  controllerGetById,
};