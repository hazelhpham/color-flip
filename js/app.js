const originalOption = document.getElementById("original");
colors = ["green", "red", "pink", "#f15025"];
btn = document.getElementById("btn");
color = document.querySelector(".color");
//get element by id: returns a reference to the element by its ID
//query Selector : Returns the first element within the document that matches the specified
// group of selectors, or null if no matches are found

originalOption.addEventListener("click", function () {
  originalOption.style.color = "#606060";
  hexOption.style.color = "black";
  btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber(); //get random number between 0 and 3
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    btn.style.backgroundColor = colors[randomNumber];

    originalOption.style.backgroundColor = colors[randomNumber];
    hexOption.style.backgroundColor = colors[randomNumber];
  });
  function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }
});
