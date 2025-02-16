// Owner IG: @chrvert_
const Instagram = require('instagram-private-api');
const { IgApiClient } = Instagram;

const ig = new IgApiClient();

const login = async () => {
  ig.state.generateDevice(process.env.INSTAGRAM_USERNAME);
  await ig.account.login(process.env.INSTAGRAM_USERNAME, process.env.INSTAGRAM_PASSWORD);
};

module.exports = { ig, login };
