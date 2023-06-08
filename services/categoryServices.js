const CategoryModel = require("../model/Categor");
const slugify = require("slugify");
const asyncHandler = require("express-async-handler");

exports.getCategory = (req, res) => {
  res.send();
};

exports.createCategory = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const category = await CategoryModel.create({name, slug: slugify(name)})
  res.status(201).res.json({data: category})
});
