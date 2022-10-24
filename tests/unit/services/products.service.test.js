const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/products.model');
const productsServices = require('../../../src/services/products.service');
const mockProducts = require('../../mocks/products.model.mock');

describe('Testes de unidade da camada Products Services', () => {
  it('Verifica se é possível listar todos os produtos', async () => {
    sinon.stub(productsModel, 'modelGetAll').resolves(mockProducts.mockedProducts);
    const response = await productsServices.serviceGetAll();

    expect(response.message).to.deep.equal(mockProducts.mockedProducts);
  });

  it('Verifica se é possível listar os produtos através do ID', async () => {
    sinon.stub(productsModel, 'modelGetById').resolves(mockProducts.mockedProducts[0]);
    const response = await productsServices.serviceGetById(1);

    expect(response.message).to.deep.equal(mockProducts.mockedProducts[0]);
  });

  afterEach(sinon.restore);
 });