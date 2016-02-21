$(function(){
  console.log("jquery ready");
  
  $('#git_handle').submit(function(evt){
      evt.preventDefault();
      //define a base url for api
      var baseapiURL = "https://api.github.com/users/",
        //get the value of the input
        git_user = $('#gituser').val(),
        //concatenate the url with user
        git_user_url = baseapiURL + git_user + "/repos",
        //cache variables
        $errorBox = $('.errorBox'),
        $dataContainer = $('#dataContainer');
      
      //empty div
      $dataContainer.empty();
    
      //make the ajax call
      $.getJSON(git_user_url, function(data) {
        console.log("success");
        var avatar = data[0].owner.avatar_url,
            output='',
        avatar = '<img src="' + avatar + '" height="100" width="100" />';

        $.each(data, function(index, element) {
          output += '<section class="user_display">';
            output += '<div class="result_name">';
              output += (index+1) + ". " + data[index].name;
            output += '</div>';
            output += '<div>';
              output += data[index].stargazers_count;
            output += '</div>'; 
            output += '<div class="result_language">';
              output += data[index].language;
            output += '</div>';
            output += '<div>';
              output += data[index].html_url;
            output += '</div>';         
          output += '</section>';
        }); //end each

        var finalHTML = avatar + output;
        $dataContainer.append(finalHTML); 

      }).fail(function(jqxhr, textStatus, error){
        var err = textStatus + ", " + error,
            noUser = "<p>User Not Found</p>",
            unknown = "<p>Sorry Something went wrong</p>";
        if(error == "Not Found") {
            //use jquery to append
            $errorBox.append(noUser);
        } else {
            //use jquery to append
            $errorBox.append(unknown);
        } 
      });
  });//end submit
  
});