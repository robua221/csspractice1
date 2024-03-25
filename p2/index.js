let progress = document.getElementById("progress");

let h3 = document.querySelector("h3");
let value = 0;
let int = setInterval(() => {
  if (value === 100) {
    h3.style.opacity = 1;
    clearInterval(int);
  }

  value++;
  progress.style.width = `${value}%`;
  console.log(value);
}, 50);
