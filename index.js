function displayJoke(response) {
  let jokeElement = document.querySelector("#joke");
  console.log(response.data.answer);

  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 40,
  });
}

function generateJoke(event) {
  event.preventDefault();

  let apiKey = "3471d6bbaf0b6da9tcfad5o5ae1dc50c";
  let context =
    "You are a funny AI Assistant that tells short and sweet jokes.";
  let prompt = "Generate a short and unique joke.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");
  jokeElement.innerHTML = "Generating a joke for you...please wait.";

  console.log("called the AI api");
  axios.get(apiUrl).then(displayJoke);
}
let generatorButton = document.querySelector("#generate-joke-button");
generatorButton.addEventListener("click", generateJoke);
