const hexOption = document.getElementById("hex");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
//get element by id: returns a reference to the element by its ID
//query Selector : Returns the first element within the document that matches the specified group of selectors, or nu
//null if no matches are found
hexOption.addEventListener("click", function () {
  hexOption.style.color = "#606060";
  originalOption.style.color = "black";
  btn.addEventListener("click", function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomIndex()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    btn.style.backgroundColor = hexColor;
    hexOption.style.backgroundColor = hexColor;
    originalOption.style.backgroundColor = hexColor;
  });
  function getRandomIndex() {
    return Math.floor(Math.random() * hex.length);
  }
});
