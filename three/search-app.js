$('#prog_search').keyup(function(){
    var searchText = $('#prog_search').val();
    var finalText = new RegExp(searchText, 'i');
    
    //hide / show autosuggest area if nothing is in text box
    searchText == "" ? $('#autosuggest').hide() : $('#autosuggest').show();
    
    $.getJSON('data.json', function(data) {
        console.log(data.length);
        var output = '<ul class="pList">'; 
        $.each(data, function(index, element) {
            if(element.name.search(finalText) != -1) {
                output += '<li>';
                    output += '<h2>' + element.name + '</h2>';
                    output += '<img src="' + element.avatar + '" width="80" height="80" />';
                    output += '<p>' + element.short_bio + '</p>';
                output += '</li>';
            }
        });
        output += '</ul>';
        //write the output content into the container div
        $('#autosuggest').html(output);
    });
});

