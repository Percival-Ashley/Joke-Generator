function generateJoke(event) {
  event.preventDefault();

  let jokeElement = document.getElementById("#joke");
}

let generatorButton = document.getElementById("generator-joke-button");
generatorButton.addEventListener("click", generateJoke);
