// ---------------------- COUNTDOWN JUNE

var countDownDateJune = new Date("June 24, 2025 10:35:00").getTime();
var x = setInterval(function () {
  var nowJune = new Date().getTime();
  var distance = countDownDateJune - nowJune;

  var daysJune = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hoursJune = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutesJune = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var secondsJune = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("daysJune").innerHTML = daysJune;
  document.getElementById("hoursJune").innerHTML = hoursJune;
  document.getElementById("minutesJune").innerHTML = minutesJune;
  document.getElementById("secondsJune").innerHTML = secondsJune;
}, 1000);

// ---------------------- COUNTDOWN JULY
var countDownDateJuly = new Date("July 29, 2025 11:05:00").getTime();
var y = setInterval(function () {
  var nowJuly = new Date().getTime();
  var distance = countDownDateJuly - nowJuly;

  var daysJuly = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hoursJuly = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutesJuly = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var secondsJuly = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("daysJuly").innerHTML = daysJuly;
  document.getElementById("hoursJuly").innerHTML = hoursJuly;
  document.getElementById("minutesJuly").innerHTML = minutesJuly;
  document.getElementById("secondsJuly").innerHTML = secondsJuly;
}, 1000);

function showSection(section) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((el) => el.classList.remove("active"));

  const activeSection = document.querySelector(`.section.${section}`);
  if (activeSection) {
    activeSection.classList.add("active");
  }
}
