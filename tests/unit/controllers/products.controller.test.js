const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const productsService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controler');
const mockProducts = require('../../mocks/products.model.mock');

const { expect } = chai;
chai.use(sinonChai);

describe('Testes de unidade da camada Products Controllers', () => {
  it('Verifica se é possível listar todos os produtos', async () => {
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'serviceGetAll').resolves({
      status: 200,
      message: mockProducts.mockedProducts,
    });

    await productsController.controllerGetAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockProducts.mockedProducts);

  });

  it('Verifica se é possível listar os produtos através do ID', async () => {
    const res = {};
    const req = { params: { id: 1 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'serviceGetById').resolves({
      status: 200,
      message: mockProducts.mockedProducts[0],
    });

    await productsController.controllerGetById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockProducts.mockedProducts[0]);
   });

  afterEach(sinon.restore);
 });