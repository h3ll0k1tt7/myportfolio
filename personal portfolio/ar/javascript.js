function privacypolicy() {
    alert(" خصوصيتك مهمة. لا أستخدم ملفات تعريف ارتباط، أو أدوات تتبع أو أي جمع للبيانات. الرسائل المرسلة عبر نموزج التواصل تتم ادارتها بواسطة فورمسبري وتستخدم فقط للرد عليك. لن أقوم ببيع أو مشاركت معلوماتك مع أي جهة");
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