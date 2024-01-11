function typewriterEffect() {
  const text = "Wilson-3";
  let index = 0;

  const typewriterInterval = setInterval(() => {
    const typewriterElement = document.getElementById("typewriter");

    if (index < text.length) {
      typewriterElement.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(typewriterInterval);
    }

    typewriterElement.style.opacity = 1;
  }, 1000); 
window.onload = typewriterEffect;