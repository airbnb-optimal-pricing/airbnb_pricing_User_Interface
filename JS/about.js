// let test = document.getElementsByClassName('a');

// console.log(test);
  

// test.addEventListener("mouseover", function( event ) { 

//   event.stopPropagation();
//   event.target.style.background = "linear-gradient(-90deg, black, grey)";


//   setTimeout(function() {
//     event.target.style.background = "black";
//     event.stopPropagation();
//   }, 500);

//   event.stopPropagation();
// }, false);

const nav = document.querySelectorAll('a');
nav.forEach(event => {
  event.addEventListener('click', event => {
  // event.target.style.background = "black";
  event.target.style.color = "whitesmoke";

})

});

const navHover = document.querySelectorAll('a');
navHover.forEach(event => {
  event.addEventListener('click', event => {
  // event.target.style.background = "black";
  event.target.style.borderBottom = "1px solid whitesmoke";

})

});

// const navMouse = document.querySelectorAll('a');
// navMouse.forEach(event => {
//   event.addEventListener('mouseenter', event => {
//   // event.target.style.background = "black";
//   event.target.style.border = "1px solid whitesmoke";
//   event.target.style.padding = "4px";


// })

// });



const btn = document.querySelectorAll('button');
btn.forEach(event => {
  event.addEventListener('click', event => {
  event.target.style.background = "black";
  event.target.style.color = "white";

})

});






