// ! Menu open
document.querySelector(".bar").addEventListener("click", function (event) {
  document.querySelector(".menuBar").classList.add("active");
  event.stopPropagation();
});

// ! Menu closed - click the icnon
document.querySelector(".exit").addEventListener("click", function (event) {
  document.querySelector(".menuBar").classList.remove("active");
  event.stopPropagation();
});

// ! Menu close - click the screen
document.addEventListener("click", function () {
  const menu = document.querySelector(".menuBar");
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  }
});

document.querySelector(".menuBar").addEventListener("click", function (event) {
  event.stopPropagation();
});

// ! Text animation

const element = document.getElementById("typing-text");
const text = "frontend developer |"; 
let index = 0;
let isDeleting = false;

function type() {
  if (isDeleting) {
    element.innerHTML = text.substring(0, index--);
  } else {
    element.innerHTML = text.substring(0, index++);
  }

  
  let speed = isDeleting ? 100 : 200;

  
  if (!isDeleting && index === text.length) {
    speed = 2000; 
    isDeleting = true;
  } else if (isDeleting && index === 0) {
    speed = 500; 
    isDeleting = false;
  }

  setTimeout(type, speed); 
}

type(); 
