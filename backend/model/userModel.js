const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [treu, "Please add a name"],
    },
    email: {
      type: String,
      required: [treu, "Please add a email"],
      unique: true,
    },
    password: {
      type: String,
      required: [treu, "Please add a password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = userSchema;
