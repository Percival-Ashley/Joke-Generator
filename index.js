function generateJoke(event) {
  event.preventDefault();

  let jokeElement = document.getElementById("#joke");
  jokeElement.innerHTML = "Generating joke for you...";
}

let generatorButton = document.getElementById("generator-joke-button");
generatorButton.addEventListener("click", generateJoke);
