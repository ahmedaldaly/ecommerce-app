const router = require('express').Router();
const { GetProduct, AddProduct, deleteProduct, updateProduct, GetOneProduct } = require('../controller/Product');
const { verifyTokenAndAdmin } = require('../middleware/authratition');
const upload = require('../config/connectMulter');

router.route('/')
  .get(GetProduct)
  .post(verifyTokenAndAdmin, upload.array('image', 5), AddProduct);

router.route('/:id')
  .delete(verifyTokenAndAdmin, deleteProduct)
  .put(verifyTokenAndAdmin, upload.array('image', 5), updateProduct)
  .get(GetOneProduct);

module.exports = router;
