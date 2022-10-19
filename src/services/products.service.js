const productsModel = require('../models/products.model');

const serviceGetAll = async () => {
  const response = await productsModel.modelGetAll();

  if (!response) {
    return {
      status: 404,
      message: { message: 'Product not found' },
    };
  }
  return {
    status: 200,
    message: response,
  };
};

const serviceGetById = async (id) => {
  const result = await productsModel.modelGetById(id);

  if (!result) {
    return {
      status: 404,
      message: { message: 'Product not found' },
    };
  }
  return {
    status: 200,
    message: result,
  };
 };

module.exports = {
  serviceGetAll,
  serviceGetById,
};