// Typing effect animation
function typingEffect() {
  const textElement = document.querySelector("#typing-text");
  const text = "I am Brad Traversy.";

  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      textElement.textContent += text.charAt(i);
    }, 100 * i);
  }
}

document.addEventListener("DOMContentLoaded", typingEffect);
