const router = require('express').Router();
const { Product, User, History } = require('../models');

const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all products and JOIN with user data
    const productData = await Product.findAll({
      
      include: [ ////user_id: req.session.user_id
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    console.log(productData)
    console.log("==================")
    const productsSerialized = productData.map((prod) => prod.get({plain:true}))
    console.log(productsSerialized)
    // // Serialize data so the template can read it
    // const products = productData.map((product) => product.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      products: productsSerialized,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/product/:id', async (req, res) => {
//   if (!req.session.logged_in) {
//     res.redirect('/login');
//   } else {
//     try {
//       const productData = await Product.findOne({ user_id: req.session.user_id, id: req.params.id}, {
//         include: [
//           {
//             model: Product,
//             attributes: [
//               'id',
//               'product_name',
//               'description',
//               'price',
//               'user_id',
//             ],
//           },
//         ],
//       });
      
//       const product = productData.get({ plain: true });

//       res.render('product', {
//         ...product,
//         logged_in: req.session.logged_in
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }
// });

router.get('/product/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const product = productData.get({ plain: true });
    res.render('product', {
      ...product,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/history/:id', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    try {
      const historyData = await Product.findOne({ user_id: req.session.user_id, id: req.params.id}, {
        include: [
          {
            model: Product,
            attributes: [
              'id',
              'date',
              'itemListed',
              'itemSold',
              'itemPurchased',
              'user_id',
            ],
          },
        ],
      });

      const history = historyData.get({ plain: true });

      res.render('history', {
        ...history,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
     attributes: { exclude: ['password'] },
     include: [{ model: Product }],
   });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
