var myXHR;

if (window.XMLHttpRequest) {
  myXHR = new XMLHttpRequest();
} else {
  myXHR = new ActiveXObject("Microsoft.XMLHTTP");
}

myXHR.open('GET', 'data.json', true);
myXHR.onreadystatechange = function(){
  if(myXHR.status === 200 && myXHR.readyState===4) {
    console.log(myXHR);
  }
}
myXHR.send();

