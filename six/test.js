$(function(){
  var external_json = "http://scripton.net/gsd/search/data.json";

  $.getJSON(external_json, function(data) {
      console.log(data);
  });  
});