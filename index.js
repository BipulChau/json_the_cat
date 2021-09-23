const {fetchBreedDescription} = require('./breedFetcher');
let breedName = process.argv[2];

fetchBreedDescription(breedName, (error,response, body) =>{
  if (error) {
    console.log("Error fetch details: ", error);
  } else if (response) {
    console.log("The response from the server is : ", response);
  } else {
    console.log(body);
  }
});
