const request = require('request');
// const process = require('process');


//gets input breed name, take the first 4 characters and create the url
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


//take in url and return the description portion of the breed
request(url, (error, response, body) => {
  if (error) {
    return console.log("error:", error);
  }
  const data = JSON.parse(body);
  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`This ${breedName} does not exist.`);
  };
});



// findByBreed(url);
