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

const serviceCreateProduct = async (name) => {
  if (!name) {
    return {
      status: 400,
      message: { message: '"name" is required' },
    };
  }
  if (name.length < 5) {
    return {
      status: 422,
      message: { message: '"name" length must be at least 5 characters long' },
    };
  }

  const data = await productsModel.modelCreateProduct(name);
  const response = await productsModel.modelGetById(data);
  return {
    status: 201,
    message: response,
  };
};
 
const updateServiceProducts = async (name, id) => {
  const response = await productsModel.modelGetById(id);
  if (!response) {
    return { status: 404, message: { message: 'Product not found' },
    };
  }
  if (!name) {
    return { status: 400, message: { message: '"name" is required' },
    };
  }
  if (name.length < 5) {
    return { status: 422, message: { message: '"name" length must be at least 5 characters long' },
    };
  }
  await productsModel.updateModelProducts(name, id);
  const data = await productsModel.modelGetById(id);
  return { status: 200, message: data };
};
 
const deleteServiceProducts = async (id) => {
  const response = await productsModel.modelGetById(id);
  if (!response) {
    return { status: 404, message: { message: 'Product not found' } };
  }
  await productsModel.deleteModelProducts(id);
  return { status: 204, message: '' };
 };

module.exports = {
  serviceGetAll,
  serviceGetById,
  serviceCreateProduct,
  updateServiceProducts,
  deleteServiceProducts,
};