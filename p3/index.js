let p = document.querySelector("textarea");
let span = document.querySelector("span");

p.addEventListener("input", function (e) {
  span.textContent = e.target.value.length;
});
