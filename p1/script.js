let home = document.querySelector("#home");
let about = document.querySelector("#about");
let contact = document.querySelector("#contact");

let hometext = document.querySelector("#hometext");
let abouttext = document.querySelector("#abouttext");
let contacttext = document.querySelector("#contacttext");

hometext.style.display = "block";
hometext.style.width = "50%";

home.addEventListener("click", function () {
  hideText();
  hometext.style.display = "block";
  hometext.style.width = "50%";
});
about.addEventListener("click", function () {
  hideText();
  abouttext.style.display = "block";
  abouttext.style.width = "50%";
});
contact.addEventListener("click", function () {
  hideText();
  contacttext.style.display = "block";
  contacttext.style.width = "50%";
});

function hideText() {
  document.querySelectorAll("h3").forEach((h) => (h.style.display = "none"));
}
