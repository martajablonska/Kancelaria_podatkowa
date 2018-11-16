const topBtn = document.querySelector("#sticky");
const position = topBtn.offsetTop;

function stickyBtn() {
  if (window.pageYOffset >= position) {
    topBtn.classList.add("stick")
  } else {
    topBtn.classList.remove("stick");
  }
}

window.addEventListener('scroll', stickyBtn);