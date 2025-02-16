// Owner IG: @chrvert_
require('dotenv').config();

module.exports = {
  openai: require('./openai'),
  dalle: require('./dalle'),
  insta: require('./insta'),
};
