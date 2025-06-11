function displayJoke(response) {}

function generateJoke(event) {
  event.preventDefault();

  let apiKey = "3471d6bbaf0b6da9tcfad5o5ae1dc50c";
  let context =
    "You are a funny AI Assistant that tells short and sweet jokes.";
  let prompt = "Generate a short and funny joke.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.ger(apiUrl).then(displayJoke);
}
let generatorButton = document.getElementById("generator-joke-button");
generatorButton.addEventListener("click", generateJoke);
