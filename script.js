const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');

function jsonpCallback(response) {
  resultsDiv.innerHTML = '';
  if (!response.data || response.data.length === 0) {
    resultsDiv.innerHTML = '<p>Aucun résultat trouvé.</p>';
    return;
  }
  response.data.forEach(track => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${track.album.cover_medium}" alt="Cover" />
      <h4>${track.title}</h4>
      <p>${track.artist.name}</p>
      <audio controls src="${track.preview}"></audio>
    `;
    resultsDiv.appendChild(card);
  });
}

function searchDeezer(query) {
  const oldScript = document.getElementById('jsonpScript');
  if (oldScript) oldScript.remove();

  const script = document.createElement('script');
  script.id = 'jsonpScript';
  script.src = `https://api.deezer.com/search?q=${encodeURIComponent(query)}&output=jsonp&callback=jsonpCallback`;
  document.body.appendChild(script);
}

searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    searchDeezer(query);
  }
});
