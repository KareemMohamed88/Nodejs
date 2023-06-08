const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "category name is required"],
      unique: [true, "category name must be unique"],
      minLength: [3, "category name is too short"],
      maxLength: [32, "category name is too long"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    image: String
  },
  { timestamps: true }
);

const CategoryModel = mongoose.model("categorys", categorySchema);

module.exports = CategoryModel;
