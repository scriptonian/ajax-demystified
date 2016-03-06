var myXHR = new XMLHttpRequest();
myXHR.open('get', 'data.json', true);
myXHR.send();

// Scenario #1
function performLongTask(){
  var ms = 4000 + new Date().getTime();
  while( new Date < ms );
}
performLongTask();

function xhrListener(){
  console.log('XHR Event has been handled');
}

myXHR.addEventListener('load', xhrListener);
myXHR.addEventListener('error', xhrListener);
// End Scenario #1


///////////// comment scenario #1 before running #2 //////////


// Scenario #2
/*
var myXHR = new XMLHttpRequest();
myXHR.open('get', 'data.json', true);
myXHR.send();
//call setTimeout
setTimeout(function delayed(){
  console.log('setTimeout started!')
  function xhrListener(){
    console.log('XHR Event has been handled');
  }
  myXHR.addEventListener('load', xhrListener);
  myXHR.addEventListener('error', xhrListener);
}, 4000);
*/
// End Scenario 2
