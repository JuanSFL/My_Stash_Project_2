const router = require('express').Router();
const {Cart} = require('../../models/');

router.post('/', async (req, res) => {
    try {
      const cartData = await Cart.create({
        product_name: req.body.product_name,
        description: req.body.description,
        price: req.body.price,
        src: req.body.src,
        product_id: req.body.product_id,
        user_id: req.session.user_id,
      });
      
      console.log(cartData);

      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(cartData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const cartData = await Cart.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
      
      console.log(cartData);

      if (!cartData) {
        res.status(404).json({ message: 'No product found in this cart!' });
        return;
      }
  
      res.status(200).json(cartData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const cartData = await Cart.findAll({

      });
      
      // Serialize data so the template can read it
      const carts = cartData.map((cart) => cart.get({ plain: true }));
      console.log(carts)
      // Pass serialized data and session flag into template
      res.json(carts)
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/', async (req, res) => {
    try {
      const cartData = await Cart.destroy({
        where: {
          id: req.body.product_id,
          user_id: req.session.user_id,
        },
      });
      
      console.log(cartData);

      if (!cartData) {
        res.status(404).json({ message: 'No cart found in this cart!' });
        return;
      }
  
      res.status(200).json(cartData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;