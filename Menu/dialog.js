
const body = document.querySelector("body");
const faqButton = document.querySelector('.faq-btn')

faqButton.addEventListener("click", (event) => {
 event.stopPropagation();
 body.classList.toggle("dialog-Open");
})

body.addEventListener("click", () => {
  body.classList.remove("dialog-Open");
})