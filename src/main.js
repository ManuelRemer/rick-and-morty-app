import { fetchCharacters } from "./lib/api.js";
import { combineCharacter } from "./lib/characters.js";

//const loadDataButton = document.querySelector(".header-button");
const statusDropdown = document.querySelector(".select-css");

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const status = statusDropdown.value;
  clearCharacters();
  fetchCharacters(status).then((characters) => {
    //console.log(characters);

    characters.results.forEach((character) => {
      combineCharacter(character);
    });
  });
  form.reset();
});

function clearCharacters() {
  const characterCards = document.querySelectorAll(".character-box");
  characterCards.forEach((characterCard) => characterCard.remove());
}
