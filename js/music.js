const icon = document.querySelector("#playicon");
const audio = document.querySelector("#audio");

function handleIconClick(event) {
  icon.classList.add("hidden");
  audio.classList.remove("hidden");
}

icon.addEventListener("click", handleIconClick);
