$(function(){
    
  
  $.ajax({
    url : "http://scripton.net/gsd/jsonp/jsonp.json?callback=?",
    dataType: "jsonp",
    success: function(data){
      console.log("test");      
    }
  });
  
  //ALTERNATIVE METHOD
  /*
  $.getJSON("http://scripton.net/gsd/jsonp/jsonp.json?dataHandler=?", function(data){
    //
  });
  */
  
});