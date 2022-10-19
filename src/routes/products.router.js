const express = require('express');

const productsController = require('../controllers/products.controler');

const router = express.Router();
router.use(express.json());

router.get('/:id', productsController.controllerGetById);

router.get('/', productsController.controllerGetAll);

router.post('/', productsController.controllerCreateProduct);

module.exports = router;