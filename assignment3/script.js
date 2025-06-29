// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
  let next = document.querySelector("#next");
  let prev = document.querySelector("#prev");

  next.addEventListener("click", function () {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0]);
  });

  prev.addEventListener("click", function () {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").insertBefore(items[items.length - 1], items[0]);
  });
});
//here is how i make it works so that the slider can slide and go back and fourth on queue
//by using DOMContentLoaded, it make sures that Javascript code only works after the HTML document has
// been loaded fully
//event listen is to help recognize for a click event so that when it clicked the item in the carousel
//will be interchanging depened on the direction of the click
//this allows the carousel navigation where items are cycle through by clicking the direction of navigation
