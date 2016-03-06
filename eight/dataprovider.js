var dataProvider = function(){
  //declare all serverice urls here
  var theGhanaDevUrl = 'data.json';
  //declare service methods here
  getGhanaSofwareDevs = function() {
    return $.getJSON(theGhanaDevUrl);
  };
  return {
    getGhanaSofwareDevs : getGhanaSofwareDevs
  };
}();