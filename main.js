function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


const shareButton = document.querySelector('.share-button');
const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');

shareButton.addEventListener('click', event => {
  shareDialog.classList.add('is-open');
});

closeButton.addEventListener('click', event => {
  shareDialog.classList.remove('is-open');
});












try{Typekit.load();}catch(e){
}

$(function() {
  $('#popup').animate({'bottom': '-14%'}, 1000).animate({'bottom': '-4%'}, 75).animate({'bottom': '-14%'}, 75);
  $('.popup-close-icon').on('click', function(){
  	$('#popup').animate({'bottom': '1000px'}, 500, function() {
    	$(this).remove();
    });
  });
});
