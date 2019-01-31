// When we click on the button
//The entire background page turns Purple
//If the page is already purple, make it white

var button = document.querySelector('button')
//select element you want to manipulate
// make a variable named that variable to isolate

var isPurple = false
// //the page starts of with this argument being true (page is white)
//
button.addEventListener("click", function(){
  if(isPurple){
    document.body.style.background = 'white';
  } else {
    document.body.style.background = 'purple';
  }
    isPurple = !isPurple

});

// button.addEventListener('click',function(){
// document.body.classList.toggle('purple');
//
// });
