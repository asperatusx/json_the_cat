const needle = require('needle');

const args = process.argv.slice(2);

needle.get(`https://api.thecatpi.com/v1/breeds/sarch?q=${args[0]}`, (error, response, body) => {
  if (error) {
    throw error;
  }
  if (!body || !body[0]) {
    console.log('The breed your searching for is not found');
  } else {
    console.log(body[0].description);
  }

});