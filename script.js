const songs = [
  {
    title: "Neon Dreams",
    artist: "Synthwave Collective",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    title: "Electric Pulse",
    artist: "Future Bass",
    img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop&crop=center",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    title: "Cosmic Journey",
    artist: "Space Ambient",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop&crop=center",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },
  {
    title: "Ambient Dreams",
    artist: "Ethereal Sounds",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  },
  {
    title: "Pop Sensation",
    artist: "Chart Toppers",
    img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300&h=300&fit=crop&crop=center",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
  }
];

const container = document.getElementById('cards-container');
const audioPlayer = document.getElementById('audio-player');
const searchInput = document.getElementById('search');

function displaySongs(list) {
  container.innerHTML = '';
  list.forEach((song, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.index = index;

    card.innerHTML = `
      <img src="${song.img}" alt="Cover of ${song.title}" />
      <div class="info">
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
      </div>
    `;

    card.addEventListener('click', () => {
      playSong(index);
    });

    container.appendChild(card);
  });
}

function playSong(index) {
  const song = songs[index];
  audioPlayer.src = song.audio;
  audioPlayer.play();
}

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = songs.filter(song =>
    song.title.toLowerCase().includes(query) ||
    song.artist.toLowerCase().includes(query)
  );
  displaySongs(filtered);
});

// Affiche toutes les chansons au départ
displaySongs(songs);
