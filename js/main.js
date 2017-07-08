document.addEventListener('DOMContentLoaded', function(){

var signIn = document.querySelector("button.signin");
var modal = document.querySelector('div.modal');

signIn.addEventListener('click',function(){ console.log("sign In Clicked")

modal.className = "fadeIn";
});


});
