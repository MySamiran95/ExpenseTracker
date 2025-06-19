

//------------Inner Html Data----------------------






document.addEventListener("DOMContentLoaded", function () {
  const hour = new Date().getHours();

  let greeting;
  let iconClass;

  if (hour >= 5 && hour < 12) {
    greeting = "Morning";
    iconClass = "fa-solid fa-sunrise";
  } else if (hour >= 12 && hour < 16) {
    greeting = "Afternoon";
    iconClass = "fa-solid fa-sun";
  } else if (hour >= 16 && hour < 21) {
    greeting = "Evening";
    iconClass = "fa-solid fa-sunset";
  } else {
    greeting = "Night";
    iconClass = "fa-solid fa-moon-stars";
  }

  const greetingEl = document.querySelector(".greetings2");

  if (greetingEl) {
    greetingEl.innerHTML = `${greeting}<i class="${iconClass}" style="margin-left: 15px;"></i>`;
  } else {
    console.warn("No element with class 'greetings2' found.");
  }
});


window.addEventListener("DOMContentLoaded", () => {
  // Force reflow to adjust layout properly on initial launch
  document.body.style.transform = "translateY(0.01px)";
  requestAnimationFrame(() => {
    document.body.style.transform = "";
  });
});