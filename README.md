# codealpha_task3
Web Based Music Player
## Web Music Player
This is a simple, modern music player built with HTML, CSS, and JavaScript. It features basic playback controls, a progress bar, volume control, and a dynamic playlist.

### Features:

  * **Play/Pause, Next, Previous:** Standard music playback controls.
  * **Progress Bar:** Displays song progress and allows seeking.
  * **Time Display:** Shows current playback time and total song duration.
  * **Volume Control:** Adjust the playback volume.
  * **Album Cover Animation:** The album cover rotates when a song is playing.
  * **Dynamic Playlist:** Displays a list of available songs, allowing users to select a song to play. The currently playing song is highlighted.
  * **Responsive Design:** Adapts to different screen sizes.

### Technologies Used:

  * **HTML5:** For the structure of the music player.
  * **CSS3:** For styling and animations.
  * **JavaScript (ES6+):** For all the interactive functionality.
  * **Font Awesome:** For the control icons (play, pause, next, previous, volume).

### How to Use:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ziall10/codealpha_task3.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd ziyads-music-player
    ```
3.  **Open `play.html` in your web browser.**

### Project Structure:

```
ziyads-music-player/
├── play.html          // Main HTML file
├── play.css            // Stylesheet for the music player
├── play.js             // JavaScript for player functionality
├── audio/              // Directory for audio files
│   ├── song1.mp3
│   ├── song2.mp3
│   └── song3.mp3
└── images/             // Directory for album cover images
    ├── Album-Cover.jpg
    ├── cover1.jpg
    ├── cover2.jpg
    └── cover3.jpg
```

### Customization:

  * **Add/Remove Songs:**

      * Place your `.mp3` audio files in the `audio/` directory.
      * Place corresponding album cover images (e.g., `.jpg`, `.png`) in the `images/` directory.
      * Open `play.js` and modify the `songs` array to include your new songs, ensuring the `title`, `artist`, `src` (path to audio file), and `cover` (path to cover image) properties are correct.

    <!-- end list -->

    ```javascript
    const songs = [
        {
            title: 'Your New Song Title',
            artist: 'Your New Artist',
            src: 'audio/your-new-song.mp3',
            cover: 'images/your-new-cover.jpg'
        },
        // ... existing songs
    ];
    ```

  * **Styling:** Modify `play.css` to change colors, fonts, layout, and other visual aspects of the player.

  * **Functionality:** Adjust the JavaScript in `play.js` to modify or add new player behaviors.



