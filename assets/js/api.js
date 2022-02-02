const API = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=00";

let html = '';

const getAPI = (url) => {
  return fetch(url)
    .then((Response) => Response.json())
    .then((json) => {
      fillData(json.results);
    })
    .catch((error) => {
      console.log("ERROR IN THE API" + error);
    });
};

const getAPI2 = (url) => {
  return fetch(url)
    .then((Response) => Response.json())
    .then((json) => {
      fillDataI(json);
    })
    .catch((error) => {
      console.log("ERROR IN THE API" + error);
    });
};

const fillData = (data) => {
  data.forEach((item) => {
    getAPI2(item.url);
  });
};

const fillDataI = (image) => {
  html += '<div class="col">';
  html += '<div class="text-white card h-100 bg-dark">';
  html += `<img src="${image.sprites.other.dream_world.front_default}" class="card-img-top card-img-bottom" alt="...">`;
  html += '<div class="card-body">';
  html += `<h5 class="card-title font">Name: ${image.name}</h5>`;
  html +=  '<br>'
  html += `<p class="card-text font">Height: ${image.height}</p>`;
  html += `<p class="card-text font">Weight: ${image.weight}</p>`;
  html += `<p class="card-text font">Experience: ${image.base_experience}</p>`;
  html += "</div>";
  html += "</div>";
  html += "</div>";

  document.getElementById("characters").innerHTML = html;
};



getAPI(API);
