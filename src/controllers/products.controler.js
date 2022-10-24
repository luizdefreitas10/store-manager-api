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

const controllerCreateProduct = async (req, res) => {
  const { name } = req.body;
  const result = await productsService.serviceCreateProduct(name);
  res.status(result.status).json(result.message);
};
 
const updateControllerProducts = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const response = await productsService.updateServiceProducts(name, id);
  res.status(response.status).json(response.message);
};
 
const deleteControllerProducts = async (req, res) => {
  const { id } = req.params;
  const response = await productsService.deleteServiceProducts(id);
  res.status(response.status).json(response.message);
 };

module.exports = {
  controllerGetAll,
  controllerGetById,
  controllerCreateProduct,
  updateControllerProducts,
  deleteControllerProducts,
};