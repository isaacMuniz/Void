const infoBtn = document.querySelector("#info-btn"), // to click
  popup = document.querySelector("#popup"), // to be opened/closed
  home = document.querySelector("#home"), // to insert 'open class'
  hidable = document.querySelectorAll(".below-popup"); // to be hided/shown

infoBtn.addEventListener("click", handlePopup);
let isPopupOpen = false;

function handlePopup() {
  isPopupOpen = !isPopupOpen;
  if (!isPopupOpen) {
    // close
    home.classList.remove("popup");
    hidable.forEach((element) => {
      element.classList.remove("hiden");
    });
    popup.classList.add("hiden");
    infoBtn.classList.remove("active");
  } else {
    // open
    home.classList.add("popup");
    hidable.forEach((element) => {
      element.classList.add("hiden");
    });
    popup.classList.remove("hiden");
    infoBtn.classList.add("active");
  }
}
