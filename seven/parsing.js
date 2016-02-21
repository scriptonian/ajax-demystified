var myXHR;

if (window.XMLHttpRequest) {
  myXHR = new XMLHttpRequest();
} else {
  myXHR = new ActiveXObject("Microsoft.XMLHTTP");
}

myXHR.open('GET', 'data.json', true);
myXHR.onreadystatechange = function(){
  if(myXHR.status === 200 && myXHR.readyState===4) {
    var container = document.getElementById('ajaxContent');
    //container.innerHTML = myXHR.responseText;
    
    var devs = JSON.parse(myXHR.responseText);
    var output = '<ul>'; 
    for( var dev in devs) {
      output += '<li>' + devs[dev].name + '</li>';
    }
    output += '</ul>';
    //write the output content into the container div
    container.innerHTML = output;
  }
}
myXHR.send();




