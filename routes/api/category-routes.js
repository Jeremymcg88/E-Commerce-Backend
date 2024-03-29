const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
   Category.findAll({
    include: [Product]
  }).then((dbCategory) => {
    res.json(dbCategory);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
    Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then((dbCategory) => {
    res.json(dbCategory);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body).then((dbCategory) => {
    res.json(dbCategory);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then((dbCategory) => {
    res.json(dbCategory);
  });
});

// Sequelize Destroy method using the unique id in the query 
// parameter to find then delete the instance of the post. 
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then((dbCategory) => {
    res.json(dbCategory);
  });
});

module.exports = router;