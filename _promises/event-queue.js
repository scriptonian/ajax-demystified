function performLongTask(){
  var ms = 4000 + new Date().getTime();
  while( new Date < ms );
  console.log('Long Task Finished');
}

function clickHandler(){
  console.log('Something was clicked!');
}

//listen for the click event
document.addEventListener('click', clickHandler);

performLongTask();
console.log('Finished Executing');