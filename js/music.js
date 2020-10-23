const player = document.querySelector("#music-player");
const iframe = document.querySelector("#music-player iframe");
const title = document.querySelector("#music-title");
const music = document.querySelector("#sound-content");
music.addEventListener("click", toggleOpen);
let isMusicOpen = false;
const contribute = document.querySelector("#playlist-contribution");

function toggleOpen() {
  isMusicOpen = !isMusicOpen;

  if (isMusicOpen) {
    player.style.height = "42vh";
    iframe.style.height = "42vh";
    title.innerHTML = 'Música <i class="ri-toggle-fill"></i>';
    contribute.classList.add("shown");
  } else {
    player.style.height = "0";
    iframe.style.height = "0";
    title.innerHTML = 'Música <i class="ri-toggle-line"></i>';
    contribute.classList.remove("shown");
  }
}
