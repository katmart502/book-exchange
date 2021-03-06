var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  // `title` is required and of type String
  firstname: {
    type: String,
    required: false
  },
  lastname: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  // `link` is required and of type String
  state: {
    type: String,
    required: false
  },
  zip: {
    type: String,
    required: false
  },
  belt: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event"
    }
  ],
  saves: [
    {
      type: Schema.Types.ObjectId,
      ref: "Saved"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);


// Export the Article model
module.exports = User;