function dataHandler(data){
  var output = '<ul>'; 
  $.each(data, function(index, element) {
      output += '<li>' + element.name + '</li>';
  });
  output += '</ul>';
  //write the output content into the container div
  $('#jsonpContainer').html(output); 
}