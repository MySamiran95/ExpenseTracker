gsap.to("#loading1", {
    opacity: 1,
    duration: 0.02,

})

gsap.to("#loading1", {
    opacity: 0,
    duration: 0.02,
    delay: 0.25,
})


gsap.to("#loading2", {
    opacity: 1,
    duration: 0.02,
    delay : 0.25,
})

gsap.to("#loading2", {
    opacity: 0,
    duration: 0.02,
    delay: 0.5,
})

gsap.to("#loading3", {
    opacity: 1,
    duration: 0.02,
    delay : 0.5,
})

gsap.to("#loading3", {
    opacity: 0,
    duration: 0.02,
    delay: 0.75,
})

gsap.to("#loading4", {
    opacity: 1,
    duration: 0.02,
    delay : 0.75,
})

gsap.to("#loading4", {
    opacity: 0,
    duration: 0,
    delay: 1,
})

gsap.to("#loading5", {
    opacity: 1,
    duration: 0.02,
    delay : 1,
})

gsap.to("#loading5", {
    opacity: 0,
    duration: 0.02,
    delay: 1.25,
})

gsap.to("#loading6", {
    opacity: 1,
    duration: 0.02,
    delay : 1.25,
})

gsap.to("#loading6", {
    opacity: 0,
    duration: 0.02,
    delay: 1.5,
})

gsap.to("#loading7", {
    opacity: 1,
    duration: 0.02,
    delay : 1.5,
})

gsap.to("#loading7", {
    opacity: 0,
    duration: 0.02,
    delay: 1.75,
})

gsap.to("#loading8", {
    opacity: 1,
    duration: 0.02,
    delay : 1.75,
})

gsap.to("#loading8", {
    opacity: 0,
    duration: 0.02,
    delay: 2
})

gsap.to("#loading9", {
    opacity: 1,
    duration: 0.02,
    delay : 2,
})

gsap.to("#loading9", {
    opacity: 0,
    duration: 0.02,
    delay: 2.25
})

gsap.to("#loading10", {
    opacity: 1,
    duration: 0.02,
    delay : 2.25,
})

gsap.to("#loading10", {
    opacity: 0,
    duration: 0.02,
    delay: 2.5
})

gsap.to("#loading11", {
    opacity: 1,
    duration: 0.02,
    delay : 2.5,
})

gsap.to("#loading11", {
    opacity: 0,
    duration: 0.02,
    delay: 2.75
})

gsap.to("#loading12", {
    opacity: 1,
    duration: 0.02,
    delay : 2.75,
})

gsap.to("#loading12", {
    opacity: 0,
    duration: 0.02,
    delay: 3
})

gsap.to("#loading13", {
    opacity: 1,
    duration: 0.02,
    delay : 3,
})

gsap.to("#loading13", {
    opacity: 0,
    duration: 0.5,
    delay: 4.5
})




gsap.to(".loading-screen", {
    duration: 1,
    y: "-100vh",
    ease: "power4.in",
    delay: 5,
    pointerEvents : "none"
})





gsap.from("#row-three", {
    scale : 0.90,
    opacity: 0,
    duration: 0.4,
    delay: 5.85,
    ease: "back.out(1.4)",
    duration: 0.5,
    ease: Back.easeOut.config(1.8)
})


gsap.from("#row-two", {
    scale : 0.90,
    opacity: 0,
    duration: 0.4,
    delay: 5.9,
    ease: "back.out(1.8)",
    duration: 0.5,
    ease: Back.easeOut.config(1.8)
})

gsap.from("#row-one", {
    scale : 0.90,
    opacity: 0,
    duration: 0.4,
    delay: 5.95,
    ease: "back.out(1.4)",
    duration: 0.5,
    ease: Back.easeOut.config(1.8)
})

gsap.from(".lower-heading", {
    scale : 0.90,
    opacity: 0,
    duration: 0.4,
    delay: 6,
    transform : 1.1,
    ease: "back.out(1.8)",
    duration: 0.5,
    ease: Back.easeOut.config(1.8)
})

gsap.from(".expenses-card", {
    scale : 0.90,
    opacity: 0,
    duration: 0.4,
    delay: 6.05,
    transform : 1.1,
    duration: 0.5,
    ease: Back.easeOut.config(1.8)
})


gsap.from(".upper", {
    scale : 0.90,
    opacity: 0,
    duration: 0.4,
    delay: 6.1,
    ease: "back.out(1.4)",
    duration: 0.5,
    ease: Back.easeOut.config(1.8)
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


