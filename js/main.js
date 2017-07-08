document.addEventListener('DOMContentLoaded', function(){

var signIn = document.querySelector("button.signin");
var modal = document.querySelector('div.modal');
var closeButton = document.querySelector('button.close');
var submitButton = document.querySelector('button.submit');
var inputs = document.querySelectorAll('input');
var form = document.querySelector('form')
// Fade In When Sign In Clicked
signIn.addEventListener('click',function(){ console.log("sign In Clicked")

modal.className = "fadeIn";
});

// Fade Out When Modal Clicked, form reset, errors removed
modal.addEventListener('click',function(){
  console.log("close clicked");
  modal.classList.remove("fadeIn")
  modal.classList.add("fadeOut")
  setTimeout(function(){modal.className = "modal"; form.reset(); inputs.forEach(function(input){input.classList.remove("error")})},800);
});

// INPUT Fields add even listener

inputs.forEach(function(input){
  input.addEventListener('click', function(e){
    e.stopPropagation();
    if (input.classList.contains("error")){input.classList.remove("error");}
     });

});

// Errors Appear When Submit Clicked if no values in fields, errors removed when field clicked
submitButton.addEventListener('click', function(e){
  e.stopPropagation();

  inputs.forEach(function(input){
    if (input.value == ""){
        input.classList.add("error");
      };
    });

});




});
