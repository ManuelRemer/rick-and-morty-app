import { fetchCharacters } from "./lib/api.js";
import { combineCharacter } from "./lib/characters.js";

const loadDataButton = document.querySelector("button");
const statusDropdown = document.querySelector(".select-css");
const main = document.querySelector("main");

loadDataButton.addEventListener("click", (event) => {
  event.preventDefault();
  const status = statusDropdown.value;
  clearCharacters();
  fetchCharacters(status).then((characters) => {
    characters.results.forEach((character) => {
      const characterCard = combineCharacter(character);
      main.append(characterCard);
    });
  });
});

function clearCharacters() {
  const characterCards = document.querySelectorAll("section");
  characterCards.forEach((characterCard) => characterCard.remove());
}
