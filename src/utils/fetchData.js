let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://rickandmortyapi.com/api/character/";

const  fetchData = (url) =>{
return new Promise((res, rej) =>{
    const xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  xhttp.onreadystatechange = (() => {
    if (xhttp.readyState === 4) {

        (xhttp.status === 200) ? res(JSON.parse(xhttp.responseText))
        :  rej(new Error('Error', url))
   
      /*
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error(`Error ${url}`);
        return callback(error, null);
      } 
      */
    }
  });
  xhttp.send();
})

  
}
module.exports = fetchData;