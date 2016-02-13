$.getJSON('data.json', function(data) {
    console.log(data);
    var output = '<ul>'; 
    $.each(JSON.parse(data), function(index, element) {
      output += '<li>';
        output += '<h2>' + element.name + '</h2>';
        output += '<img src="' + element.avatar + '" width="80" height="80" />';
        output += '<p>' + element.short_bio + '</p>';
      output += '</li>';
    });
    output += '</ul>';
    
    //write the output content into the container div
    $('#autosuggest').html(output);
});
