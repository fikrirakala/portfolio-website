// Typing effect animation
const textElement = document.querySelector("#typing-text");
const text = textElement.textContent;

textElement.textContent = "";

function typingEffect() {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      textElement.textContent += text.charAt(i);
    }, 100 * i);
  }
}

document.addEventListener("DOMContentLoaded", typingEffect);
