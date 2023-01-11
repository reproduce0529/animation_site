const $text = document.querySelector("html");

addEventListener("mousewheel", e => {

  if(`${window.scrollY}` > 0){
    document.querySelector(".header").classList.add("down");
  }else if(`${window.scrollY}` < 100){
    document.querySelector(".header").classList.remove("down");
  }
});