function privacypolicy() {
    alert("Your privacy matters ❤ No cookies. No trackers. No data collection. Messages sent through my contact form are handled by Formspree and used only to reply. I never sell or share you information.");
}
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("musicBtn");

  btn.addEventListener("click", async () => {
    try {
      if (music.paused) {
        await music.play();
        music.volume = 0.3;
        btn.textContent = "Pause Music ⏸";
      } else {
        music.pause();
        btn.textContent = "Play Music 🎵";
      }
    } catch (err) {
      console.log("Audio blocked:", err);
    }
  });