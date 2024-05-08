const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

let fruitSuggestions = [];

const fruits = [
  "Apple", "Apricot", "Avocado 🥑", "Banana", "Bilberry", "Blackberry", "Blackcurrant", "Blueberry", "Boysenberry", "Currant",
  "Cherry", "Coconut", "Cranberry", "Cucumber", "Custard apple", "Damson", "Date", "Dragonfruit", "Durian", "Elderberry",
  "Feijoa", "Fig", "Gooseberry", "Grape", "Raisin", "Grapefruit", "Guava", "Honeyberry", "Huckleberry", "Jabuticaba",
  "Jackfruit", "Jambul", "Juniper berry", "Kiwifruit", "Kumquat", "Lemon", "Lime", "Loquat", "Longan", "Lychee", "Mango",
  "Mangosteen", "Marionberry", "Melon", "Cantaloupe", "Honeydew", "Watermelon", "Miracle fruit", "Mulberry", "Nectarine",
  "Nance", "Olive", "Orange", "Clementine", "Mandarine", "Tangerine", "Papaya", "Passionfruit", "Peach", "Pear", "Persimmon",
  "Plantain", "Plum", "Pineapple", "Pomegranate", "Pomelo", "Quince", "Raspberry", "Salmonberry", "Rambutan", "Redcurrant",
  "Salak", "Satsuma", "Soursop", "Star fruit", "Strawberry", "Tamarillo", "Tamarind", "Yuzu"
];

function search(str) {
  let results = [];
  fruits.forEach(item => {
    if (item.toLowerCase().includes(str.toLowerCase())) {
      results.push(item);
    }
  });
  return results;
}

function searchHandler(e) {
  const inputVal = e.target.value;
  const results = search(inputVal);
  showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
  fruitSuggestions = results; // Update fruit suggestions
  suggestions.innerHTML = ''; // Clear previous suggestions
  results.forEach(result => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i><a href="#">${result}</a>`;
    suggestions.appendChild(li);
  });
  suggestions.classList.toggle('has-suggestions', results.length > 0); // Show/hide suggestions
}

function useSuggestion(e) {
  if (e.target.tagName === 'A') {
    const selectedSuggestion = e.target.textContent;
    input.value = selectedSuggestion;
    suggestions.innerHTML = ''; // Clear suggestions after selection
  }
}

input.addEventListener('input', searchHandler);
suggestions.addEventListener('click', useSuggestion);

