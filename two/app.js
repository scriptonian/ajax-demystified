/*
$.getJSON('data.json', function(){
    alert('data is loaded');
});
*/

/*
$.getJSON('data.json')
    .done(function(){ alert('yay it loaded'); });
*/

/*
$.getJSON('data.json', function(data){
    console.log(data);
});
*/

$.getJSON('data.json', function(data) {
    console.log(data);
    var output = '<ul>'; 
    $.each(JSON.parse(data), function(index, element) {
        output += '<li>' + element.name + '</li>';
    });
    output += '</ul>';
    
    //write the output content into the container div
    $('#devContainer').html(output);
});
