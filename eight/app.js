function getGhanaSofwareDevs(){
  return $.getJSON('data.json');
}
//wire up the promise
getGhanaSofwareDevs()
  .then(function(data) {
    console.log(data);
  }), function(err){
    //if there is an error
  };