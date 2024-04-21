const songs = [
  {
    title: "Perfect - Ed Sheeran",
    artist: "Ed Sheeran",
    duration: "4:23",
    url: "./song-collection/Perfect.mp3",
    img: "./music-cover-img/Perfect.jpg",
  },
  {
    title: "Ek Din Aap",
    artist: " Alka Yagnik and Kumar Sanu",
    duration: "4:34",
    url: "./song-collection/Ek Din Aap.mp3",
    img: "./music-cover-img/ek_din_aap.jpeg",
  },
  {
    title: "Teri Hogaiyaan 2",
    artist: "Vishal Mishra",
    duration: "3:42",
    url: "./song-collection/Teri Hogaiyaan 2.mp3",
    img: "./music-cover-img/teri_hogaiyaan_2.jpg",
  },
  {
    title: "Chitta",
    artist: " Manan Bhardwaj",
    duration: "3:59",
    url: "./song-collection/Chitta.mp3",
    img: "./music-cover-img/chitta.jpeg",
  },
];

var audio = new Audio();
var allSongs = document.querySelector("#all-songs");
var selectedSong = 0;
var poster = document.querySelector("#left");
var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");
var pervBtn = document.querySelector("#perv-song");
var nextBtn = document.querySelector("#next-song");

function mainFunction() {
  var clutter = "";
  songs.forEach(function (dets, idx) {
    clutter += ` <div class="song-card" id=${idx}>
<div class="part1">
    <img src="${dets.img}"
        alt="img">
    <h2>${dets.title}</h2>
</div>
<h6>${dets.duration}</h6>
</div>`;
  });
  allSongs.innerHTML = clutter;
  audio.src = songs[selectedSong].url;
  poster.style.backgroundImage = `url(${songs[selectedSong].img})`;
 console.log(songs[selectedSong].img)
  // poster.style.backgroundImage = `url(music-cover-img/${songs[selectedSong].img})`;
}

mainFunction();

allSongs.addEventListener("click", function (details) {
  selectedSong = details.target.id;
  play.innerHTML = `<i class="ri-pause-line"></i>`;
  mainFunction();
  audio.play();
});

var flag = 0;
play.addEventListener("click", function () {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-line"></i>`;
    mainFunction();
    audio.play;
    flag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-fill"></i>`;
    mainFunction();
    audio.pause;
    flag = 0;
  }
});

forward.addEventListener("click", function () {
  if (selectedSong < songs.length - 1) {
    selectedSong++;
    mainFunction();
    audio.play();
  } else {
    forward.style.opacity = "0.5";
  }
});

backward.addEventListener("click", function () {
  if (selectedSong > 0) {
    selectedSong--;
    mainFunction();
    audio.play();
  } else {
    backward.style.opacity = "0.5";
  }
});
