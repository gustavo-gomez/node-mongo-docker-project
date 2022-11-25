const { get } = require('lodash');

exports.CreateProduct = (req, res) => {
  const name = get(req, 'body.name');
  const age = get(req, 'body.age');

  res.json({ name, age });

  // logic to add to DB
};

exports.DeleteProduct = (req, res) => {
  res.json(req.body);

  // logic to delete from DB
};

exports.GetProduct = (req, res) => {
  res.json({ id: 1, name: 'laptop' });

  // to get entry from DB
};
