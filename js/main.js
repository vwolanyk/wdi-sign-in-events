document.addEventListener('DOMContentLoaded', function(){

var signIn = document.querySelector("button.signin");
var modal = document.querySelector('div.modal');
var closeButton = document.querySelector('button.close')
signIn.addEventListener('click',function(){ console.log("sign In Clicked")

modal.className = "fadeIn";
});

closeButton.addEventListener('click',function(){
  console.log("close clicked");
  modal.classList.remove("fadeIn")
  modal.classList.add("fadeOut")
  setTimeout(function(){modal.className = "modal";},1000);
});

});
