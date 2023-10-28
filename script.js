const pinkShades = [
    "#FF69B4", // Deep Pink
    "#FF1493", // Deep Pink
    "#FF0066", // Strong Pink
    "#FF007F", // Strong Pink
    "#FF99CC", // Light Pink
    "#FF85A2", // Pastel Pink
    "#FF77A9", // Pastel Pink
    "#FF6BBD", // Pastel Pink
    "#FF5277", // Salmon Pink
    "#FF66CC", // Bubblegum Pink
    "#FF3399", // Hot Pink
    "#FF33CC", // Hot Pink
    "#FF1A75", // Fuchsia Pink
    "#FF00FF", // Magenta
    "#FFC3A0", // Peach Pink
    "#FF91A4", // Blush Pink
    "#FF69B4", // Orchid Pink
    "#FFD700", // Gold
    "#FFB6C1", // Light Pink
    "#FFD9E8", // Pale Pink
    "#F0E68C", // Khaki
  ];
  
  let currentIndex = 0;
  
  function animatePinkShades() {
    document.body.style.backgroundColor = pinkShades[currentIndex];
    currentIndex = (currentIndex + 1) % pinkShades.length;
  }

  setInterval(animatePinkShades, 3000);
  
