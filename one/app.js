//load text
$('#recipe-box').load('food.txt');

//load html
//$('.todays-special').load('macaroni-cheese.html');

//load fragment
$('.todays-special').load('recipes.html #specials');

//load fragment on click
$('.new-recipes a').on('click', function(evt){
    evt.preventDefault();
    var url = this.href;
    //load whatever is in the specials div 
    $('.display-recipe').load(url + ' #specials').hide().fadeIn('slow');
});