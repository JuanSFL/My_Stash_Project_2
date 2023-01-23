const router = require('express').Router();
const { Product, History } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const dbProductData = await Product.create({
        type: req.body.type,
        brand: req.body.brand,
        product_name: req.body.product_name,
        description: req.body.description,
        condition: req.body.condition,
        color: req.body.color,
        price: req.body.price,
        user_id: req.session.user_id
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbProductData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.post('/history', async (req, res) => {
    try {
      const historyData = await History.create({
        date: req.body.date,
        product_id: req.body.product_id,
        itemListed: req.body.itemListed,
        itemSold: req.body.itemSold,
        itemPurchased: req.body.itemPurchased,
        user_id: req.session.user_id
      });
      
      console.log(historyData);
      
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(historyData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const productData = await Product.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!productData) {
        res.status(404).json({ message: 'No product found with this id!' });
        return;
      }
  
      res.status(200).json(productData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;