const api = "https://script.google.com/macros/s/AKfycbxnW0rn45fYT3gtgRySiGnx-WxSH-qrnBTre_R0SnNY0gDE4_QSRsq8m9ZKpNbD-lazwA/exec";
const storageKey = "apiData";

// ✅ Utility
function getFinalData() {
  const raw = localStorage.getItem(storageKey);
  return raw ? JSON.parse(raw) : null;
}
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-IN', { month: 'long' }).format(date);
}
function formatIndianNumber(x) {
  x = x.toString().split('.');
  let intPart = x[0];
  let decPart = x[1] ? '.' + x[1] : '';
  let lastThree = intPart.slice(-3);
  let otherNumbers = intPart.slice(0, -3);
  if (otherNumbers !== '') lastThree = ',' + lastThree;
  return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + decPart;
}
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// ✅ Update Dashboard
function updateDashboardFromData(dashboardData) {
  const $ = (sel) => document.querySelector(sel);
  if (!dashboardData) return;

  try {
    const safeUpdate = (selector, value) => {
      const el = $(selector);
      if (el) el.innerHTML = value;
    };

    safeUpdate(".month", formatDate(dashboardData[30][0]));
    safeUpdate(".monthly-amount", formatIndianNumber(dashboardData[20][1]));
    safeUpdate(".today-amount", formatIndianNumber(dashboardData[20][2]));
    safeUpdate(".male-count-count", dashboardData[27][0]);
    safeUpdate(".female-count-count", dashboardData[27][1]);
    safeUpdate(".child-count-count", dashboardData[27][2]);

    const map = [
      "house", "groceries", "fashion", "education", "medical",
      "travel", "wellbeing", "entertainment", "subscriptions",
      "household", "electronics", "trips", "giving", "vehicle",
      "events", "care", "others", "investments"
    ];
    const dataIndex = Array.from({ length: 18 }, (_, i) => i);

    map.forEach((cat, i) => {
      const idx = dataIndex[i];
      safeUpdate(`#${cat}-monthly`, formatIndianNumber(dashboardData[idx][1]));
      safeUpdate(`#${cat}-today`, formatIndianNumber(dashboardData[idx][2]));
      safeUpdate(`#${cat}-count`, dashboardData[idx][3]);
    });

    const statsButton = $(".statistic-button");
    if (statsButton) {
      statsButton.style.visibility =
        (dashboardData[118][0] === 1 || dashboardData[118][0] === 2)
          ? "visible"
          : "hidden";
    }

  } catch (err) {
    console.warn("⚠️ Dashboard update error:", err);
  }
}

function updateHTMLFromData(data) {
  // Reserved for future DOM updates
  console.log("📋 updateHTMLFromData called");
}

// ✅ Fetch + Storage
async function fetchAndUpdate() {
  try {
    console.log("🌐 Fetching data from API...");
    const response = await fetch(api);
    const data = await response.json();
    console.log("📊 Data received:", data);

    const oldData = localStorage.getItem(storageKey);
    const isChanged = JSON.stringify(data) !== oldData;

    if (isChanged) {
      localStorage.setItem(storageKey, JSON.stringify(data));
      updateHTMLFromData(data);
      updateDashboardFromData(data.getData3);
      console.log("✅ Dashboard updated with new data");
    } else {
      console.log("⏳ No change in data");
    }
  } catch (err) {
    console.error("❌ Error fetching data:", err);
  }
}

// ✅ Auto-Fetch Control
let fetchInterval = null;
let inactivityTimeout = null;
const fetchDelay = 5000;
const inactivityLimit = 1 * 60 * 1000;
let hasStartedOnce = false;

function startFetching() {
  if (!fetchInterval) {
    fetchAndUpdate();
    fetchInterval = setInterval(fetchAndUpdate, fetchDelay);

    if (hasStartedOnce) {
      showToast("🔄 Auto-sync started");
      console.log("🔄 Fetching resumed");
    } else {
      console.log("🚀 Initial sync started silently");
      hasStartedOnce = true;
    }
  }
}

function stopFetching() {
  if (fetchInterval) {
    clearInterval(fetchInterval);
    fetchInterval = null;
    showToast("⏸ Auto-sync paused due to inactivity");
    console.log("🛑 Fetching paused");
  }
}

function resetInactivityTimer() {
  clearTimeout(inactivityTimeout);
  inactivityTimeout = setTimeout(() => {
    stopFetching();
  }, inactivityLimit);

  if (!fetchInterval) {
    startFetching();
  }
}

// ✅ Track Interactions
["mousemove", "keydown", "touchstart"].forEach(event => {
  document.addEventListener(event, resetInactivityTimer);
});

// ✅ Initialize
window.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM fully loaded");
  const finalData = getFinalData();
  if (finalData) {
    updateHTMLFromData(finalData);
    updateDashboardFromData(finalData.getData3);
    console.log("📁 Data loaded from localStorage");
  }

  startFetching();
  resetInactivityTimer();
});


let finalData = getFinalData()







///////////////////////////////////

