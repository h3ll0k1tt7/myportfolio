function privacypolicy() {
    alert("Your privacy matters ❤ No cookies. No trackers. No data collection. Messages sent through my contact form are handled by Formspree and used only to reply. I never sell or share you information.");
}

const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");
const icon = document.getElementById("music-note-emoji");                            

let resetTimeout;
                             
 btn.addEventListener("click", async () => {
  
  clearTimeout(resetTimeout);
  if (music.paused) {
  await music.play();
  music.volume = 0.3;
  icon.src = "../images/play-symbol.png"; 

  } else {
    music.pause();
    icon.src = "../images/pause-symbol.png"; 

  resetTimeout = setTimeout(() => {
    icon.src = "../images/music-note-emoji.png"; 
                    }, 2000);
              }
                 });

function playSound() {
  document.getElementById("btnSound").play();
}