
const audioPlayer = document.getElementById("audioPlayer");

const gambarList = document.querySelectorAll(".gambar");
gambarList.forEach((gambar, index) => {
  gambar.addEventListener("click", function() {
    // Mainkan lagu sesuai dengan indeks gambar
    playAudio(index);
  });
});


function playAudio(index) {
  
  const audioSources = audioPlayer.querySelectorAll("source");

  
  if (audioSources.length > index) {
   
    audioPlayer.pause();

    const selectedSource = audioSources[index];

    audioPlayer.src = selectedSource.src;
    audioPlayer.load();
    audioPlayer.play();

    // Tampilkan notifikasi alert
    alert("Lagu berhasil diputar: " + selectedSource.src);
  } else {
    // Jika tidak ada sumber audio yang sesuai, tampilkan pesan kesalahan
    console.error("Sumber audio tidak tersedia untuk gambar yang dipilih.");
  }
}
