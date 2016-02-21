var myXHR = new XMLHttpRequest();
myXHR.open('GET', 'data.json', true);
myXHR.onload = function() {
  if(myXHR.status === 200) {
    //it was successful process results
    document.writeln(myXHR.responseText);
  }
}
myXHR.send();

