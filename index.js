function generateJoke(event) {
  event.preventDefault();

  let apiKey = "3471d6bbaf0b6da9tcfad5o5ae1dc50c";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key={key}`;
}
let generatorButton = document.getElementById("generator-joke-button");
generatorButton.addEventListener("click", generateJoke);
