$('#prog_search').keyup(function(){
    var searchText = $('#prog_search').val(),
        finalText = new RegExp(searchText, 'i'),
        data_url = "data.json";
    
    //hide / show autosuggest area if nothing is in text box
    searchText == "" ? $('#autosuggest').hide() : $('#autosuggest').show();
    
    $.ajax({
      type: 'GET',
      url: data_url,
      timeout: 3000,
      success: function(data){
        var output = '<ul class="pList">'; 
        $.each(JSON.parse(data), function(index, element) {
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
      },
      fail: function(){
        console.log('This function gets executed when the request fails');
      },
      beforeSend: function() {
        console.log('This function will run before the AJAX request is made')
      },
      complete: function(){
        console.log('This function will run after the success method has finished')
      }
    }); //end $.ajax
  
});

