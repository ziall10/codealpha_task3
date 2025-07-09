document.addEventListener('DOMContentLoaded', () => {
    // Get all the necessary DOM elements
    const playerContainer = document.querySelector('.player-container');
    const cover = document.getElementById('cover');
    const title = document.getElementById('title');
    const artist = document.getElementById('artist');
    const playBtn = document.getElementById('play');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const progressContainer = document.getElementById('progress-container');
    const progress = document.getElementById('progress');
    const currentTimeSpan = document.getElementById('current-time');
    const durationSpan = document.getElementById('duration');
    const volumeSlider = document.getElementById('volume');
    const playlistUl = document.getElementById('playlist');

    // Create a new Audio object
    const audio = new Audio();

   
    const songs = [
        {
            title: 'song 1',
            artist: 'in group',
            src: 'audio/song1.mp3',
            cover: 'images/cover1.jpg'
        },
        {
            title: 'song 2',
            artist: 'in group',
            src: 'audio/song2.mp3',
            cover: 'images/cover2.jpg'
        },
        {
            title: 'song 3',
            artist: 'in gruop',
            src: 'audio/song3.mp3',
            cover: 'images/cover3.jpg'
        },
       
    ];

    let songIndex = 0; // Current song index in the playlist
    let isPlaying = false; // Flag to track if music is playing

    // --- Functions for Music Player Logic ---

    // Load a specific song into the player
    function loadSong(index) {
        const song = songs[index];
        title.textContent = song.title;
        artist.textContent = song.artist;
        cover.src = song.cover;
        audio.src = song.src;

        // Update active class in playlist
        updatePlaylistActive(index);
    }

    // Play the current song
    function playSong() {
        isPlaying = true;
        playBtn.querySelector('i.fas').classList.remove('fa-play');
        playBtn.querySelector('i.fas').classList.add('fa-pause');
        cover.parentElement.classList.add('play'); // Start cover rotation
        audio.play();
    }

    // Pause the current song
    function pauseSong() {
        isPlaying = false;
        playBtn.querySelector('i.fas').classList.remove('fa-pause');
        playBtn.querySelector('i.fas').classList.add('fa-play');
        cover.parentElement.classList.remove('play'); // Stop cover rotation
        audio.pause();
    }

    // Play previous song
    function prevSong() {
        songIndex--;
        if (songIndex < 0) {
            songIndex = songs.length - 1; // Loop to the last song
        }
        loadSong(songIndex);
        playSong();
    }

    // Play next song
    function nextSong() {
        songIndex++;
        if (songIndex >= songs.length) {
            songIndex = 0; // Loop to the first song
        }
        loadSong(songIndex);
        playSong();
    }

    // Update progress bar and time display
    function updateProgress(e) {
        const { duration, currentTime } = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;

        // Calculate minutes and seconds for current time
        let currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if (currentSeconds < 10) {
            currentSeconds = `0${currentSeconds}`;
        }
        currentTimeSpan.textContent = `${currentMinutes}:${currentSeconds}`;
    }

    // Set progress bar when clicked
    function setProgress(e) {
        const width = this.clientWidth; // Total width of the progress bar container
        const clickX = e.offsetX; // X position of the click relative to the container
        const duration = audio.duration;

        audio.currentTime = (clickX / width) * duration;
    }

    // Format and display total duration
    function setDuration() {
        if (!isNaN(audio.duration)) {
            let totalMinutes = Math.floor(audio.duration / 60);
            let totalSeconds = Math.floor(audio.duration % 60);
            if (totalSeconds < 10) {
                totalSeconds = `0${totalSeconds}`;
            }
            durationSpan.textContent = `${totalMinutes}:${totalSeconds}`;
        } else {
            durationSpan.textContent = '0:00'; // Default if duration is not available yet
        }
    }

    // Set volume
    function setVolume() {
        audio.volume = volumeSlider.value;
    }

    // --- Bonus Features ---

    // Populate playlist
    function populatePlaylist() {
        songs.forEach((song, index) => {
            const li = document.createElement('li');
            li.setAttribute('data-index', index);
            li.innerHTML = `
                <span class="playlist-title">${song.title}</span>
                <span class="playlist-artist">${song.artist}</span>
            `;
            li.addEventListener('click', () => {
                songIndex = index;
                loadSong(songIndex);
                playSong();
            });
            playlistUl.appendChild(li);
        });
    }

    // Update active class in playlist
    function updatePlaylistActive(activeIndex) {
        const playlistItems = playlistUl.querySelectorAll('li');
        playlistItems.forEach((item, index) => {
            if (index === activeIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // --- Event Listeners ---

    // Play/Pause button click
    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    });

    // Previous button click
    prevBtn.addEventListener('click', prevSong);

    // Next button click
    nextBtn.addEventListener('click', nextSong);

    // Time/song update event
    audio.addEventListener('timeupdate', updateProgress);

    // When song ends (Autoplay bonus)
    audio.addEventListener('ended', nextSong);

    // When audio metadata is loaded (duration available)
    audio.addEventListener('loadedmetadata', setDuration);

    // Click on progress bar to seek
    progressContainer.addEventListener('click', setProgress);

    // Volume slider change
    volumeSlider.addEventListener('input', setVolume);

    // --- Initialization ---

    // Load the first song when the page loads
    loadSong(songIndex);
    // Populate the playlist
    populatePlaylist();
    // Set initial volume
    setVolume();
});
