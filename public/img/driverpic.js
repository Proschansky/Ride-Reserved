require('es6-promise').polyfill();
require('isomorphic-fetch');

module.exports = function (){

const url = "https://randomuser.me/api/";

fetch(url,  {
    method: "GET"
}).
  then(function(response){
    return response.json()
  })
  .then(function(data) {
    return data.results[0].picture.medium
  })
};
