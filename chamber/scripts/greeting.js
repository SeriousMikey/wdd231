const greeting = document.getElementById("greeting");

const now = Date.now();

const lastVisit = localStorage.getItem("lastVisit");

function daysBetween(date1, date2) {
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor((date1 - date2) / oneDay);
}

if (!lastVisit) {
    greeting.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysElapsed = daysBetween(now, Number(lastVisit));
  if (daysElapsed < 1) {
    greeting.textContent = "Back so soon! Awesome!";
  } else if (daysElapsed === 1) {
    greeting.textContent = "You last visited 1 day ago.";
  } else {
    greeting.textContent = `You last visited ${daysElapsed} days ago.`;
  }
}

localStorage.setItem("lastVisit", now);
