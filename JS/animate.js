gsap.to("body", {
  scale: 1,
  duration: 0.25,
  opacity: 1
})


gsap.to("body", {
  scale: 1,
  duration: 0.25,
  opacity: 1
})




// Ripple Effect

function animatedButton(clickedEl, redirectURL = null, e) {
  const isWhite = clickedEl.classList.contains("white-container");
  const isBlack = clickedEl.classList.contains("black-container");
  const isRed = clickedEl.classList.contains("red-container");
  const isGreen = clickedEl.classList.contains("green-container");

  if (!isWhite && !isBlack && !isRed && !isGreen) return;

  // 🌊 Add Ripple
  createRipple(clickedEl, event);

  const downColor = isWhite
    ? "#d5d5d5"
    : isBlack
    ? "#3a3a3a"
    : isRed
    ? "#ff4949"
    : "#1f7a1f"; // green press
  const upColor = isWhite
    ? "#e0e0e0"
    : isBlack
    ? "#212121"
    : isRed
    ? "#ff4949"
    : "#2ecc71"; // green release
    
  const duration = 0.15;
  const delay = 0.16;
  const redirectDelay = 400;

  // Animate
  gsap.to(clickedEl, {
    scale: 0.98,
    duration: duration,
    backgroundColor: downColor
  });

  gsap.to(clickedEl, {
    scale: 1,
    duration: duration,
    backgroundColor: upColor,
    delay: delay
  });

  if (redirectURL) {
    setTimeout(() => {
      window.location.href = redirectURL;
    }, redirectDelay);
  }
}

// 💧 Ripple Logic
function createRipple(button, event) {
  const rect = button.getBoundingClientRect();
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  const circle = document.createElement("span");
  circle.style.width = circle.style.height = `${diameter}px`;

  // ✅ Use position relative to the element's bounding box
  circle.style.left = `${event.clientX - rect.left - radius}px`;
  circle.style.top = `${event.clientY - rect.top - radius}px`;

  circle.classList.add("ripple");

  // Remove old ripple if exists
  const oldRipple = button.querySelector(".ripple");
  if (oldRipple) {
    oldRipple.remove();
  }

  button.appendChild(circle);
}


