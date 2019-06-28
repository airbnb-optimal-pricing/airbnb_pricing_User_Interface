// Navigation Events

const nav = document.querySelectorAll('nav a');
nav.forEach(event => {
  event.addEventListener('click', event => {
  // event.target.style.background = "black";
  event.target.style.color = "grey";

})

});

const navHover = document.querySelectorAll('nav a');
navHover.forEach(event => {
  event.addEventListener('click', event => {
  // event.target.style.background = "black";
  event.target.style.borderBottom = "1px solid whitesmoke";

})

});

const navMouse = document.querySelectorAll('nav a');
navMouse.forEach(event => {
  event.addEventListener('mouseenter', event => {
  // event.target.style.background = "black";
  event.target.style.background = "whitesmoke";
  event.target.style.color = "black";
  event.target.style.padding = ".5%";

  

})
 
  event.addEventListener('mouseout', event => {
    event.target.style.background = "black";
    event.target.style.color = "white";
    event.target.style.padding = "none";
  })
});




// Button Events

const btn = document.querySelectorAll('button');
btn.forEach(event => {
  event.addEventListener('click', event => {
  event.target.style.background = "black";
  event.target.style.color = "white";

})

});


// Call to action (login & get yourr quote) was added on 
// Fnu's submission of the marketing page where we added the 
// six questions Connor asked for. The page is also responsive

// test





