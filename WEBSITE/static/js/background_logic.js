// background_logic.js

document.addEventListener("DOMContentLoaded", function () {
  const backgrounds = [
    'url("Images/background6.jpg")',
    'url("Images/background4.jpg")',
    'url("Images/background3.jpg")',
    'url("Images/background2.jpg")',
    'url("Images/background1.jpg")',
  ];

  let currentBackgroundIndex = 0;

  function rotateBackground() {
    document.body.style.backgroundImage = backgrounds[currentBackgroundIndex];
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
  }

  rotateBackground(); // Initial background setup

  setInterval(rotateBackground, 7000); // Rotate the background every 7 seconds
});
  