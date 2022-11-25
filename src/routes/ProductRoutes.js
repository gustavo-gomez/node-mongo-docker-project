const express = require('express');
const router = express.Router();

const {
  CreateProduct,
  DeleteProduct,
  GetProduct,
} = require('../controllers/ProductController');

router.post('/entry', CreateProduct);
router.delete('/entry', DeleteProduct);
router.get('/entry', GetProduct);

module.exports = router;
