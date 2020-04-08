const endpoint = 'superheroes.json';

const heroes = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => heroes.push(...data));

function findMatches(wordToMatch, heroes) {
  return heroes.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return place.superhero.match(regex) || place.state.match(regex)
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, heroes);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const sH = place.superhero.replace(regex, `<span class="hl">${this.value}</span>`);
    const pN = place.publisher.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${sH}, ${pN}</span>
        <span class="population">${place.alter_ego}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

function playAudio(){
  document.getElementById("theme").play();
  document.getElementById("theme").loop = true;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);