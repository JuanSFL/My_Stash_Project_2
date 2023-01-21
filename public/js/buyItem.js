router.put('/:id', withAuth, async (req, res) => {
try {
    const ProductData = await Product.put({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!ProductData) {
      res.status(404).json({ message: 'No Product found with this id!' });
      return;
    }

    res.status(200).json(ProductData);
  } catch (err) {
    res.status(500).json(err);
  }
});
