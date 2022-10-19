const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/db/connection');
const productsModel = require('../../../src/models/products.model');

const mockProducts = require('../../mocks/products.model.mock');

describe('Testes de unidade da camada Products Models', () => {
  it('Verifica se é possível listar todos os produtos', async () => {
    sinon.stub(connection, 'execute').resolves([mockProducts.mockedProducts]);
    const response = await productsModel.modelGetAll();

    expect(response).to.deep.equal(mockProducts.mockedProducts);
  });
  it('Verifica se é possível listar os produtos através do ID', async () => {
    sinon.stub(connection, 'execute').resolves([mockProducts.mockedProducts]);
    const response = await productsModel.modelGetById(1);

    expect(response).to.deep.equal(mockProducts.mockedProducts[0]);
  });


  afterEach(sinon.restore);

});