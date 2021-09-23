let fetcher = process.argv.slice(2);
const request = require("request");
//const fs = require("fs");
const url = "https://api.thecatapi.com/v1/breeds/search?q=" + fetcher[0];

//console.log(url);

request(url, (error, response, body) =>{
  //console.log ("Error: ", error)
  if (error) {
    return console.log(error);

  }

  //console.log(response.statusCode)


  if (response.statusCode !== 200) {
    return console.log(response.statusCode);
  }

  const data = JSON.parse(body);
  //console.log(data.length)
  if (data.length === 0) {
    console.log(`The requested breed ${fetcher[0]} could not be found.`);
    return;
  } else {
    console.log(data[0].description);
    //console.log(`${data[0]["description"]}`)
    return;
  }

  //const data = JSON.parse(body)
  //console.log(data)
  //console.log(`${typeof(data)}`)

});
  

