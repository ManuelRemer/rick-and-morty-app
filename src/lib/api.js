const BASE_URL = "https://rickandmortyapi.com/api/character";

export function fetchCharacters(status) {
  let url;

  if (status === "alive") {
    url = `${BASE_URL}?status=alive`;
  } else if (status === "dead") {
    url = `${BASE_URL}?status=dead`;
  } else if (status === "unknown") {
    url = `${BASE_URL}?status=unknown`;
  } else if (status === "select all") {
    url = `${BASE_URL}`;
  }
  return fetch(url).then((res) => res.json());
}

// fetch("https://rickandmortyapi.com/api/character/")
//   .then((res) => {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error();
//     }
//   })
//   .then((dataObject) => {
//     console.log(dataObject);
//     const main = document.querySelector("main");
//     dataObject.results.forEach((character) => {
//       const section = document.createElement("section");
//       section.classList.add("character-box");
//       const img = document.createElement("img");
//       img.src = character.image;
//       img.classList.add("character-box__image");
//       const h2 = document.createElement("h2");
//       h2.textContent = `${character.name}`;
//       h2.classList.add("character-box");
//       main.append(section);
//       section.append(h2);
//       section.append(img);
//     });
//   });
