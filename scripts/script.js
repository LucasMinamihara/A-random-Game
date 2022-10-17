document.addEventListener("DOMContentLoaded", start);

function start() {
  let keyBoardKey = "";
  const person = window.document.querySelector(".person");

  // minumum value margin 680px
  // maximum margin 900px
  setInterval(() => {
    console.log(getComputedStyle(person).margin);
  }, 200);

  window.addEventListener("keydown", (event) => {
    keyBoardKey = event.key;
    if (keyBoardKey === " ") {
      person.classList.add("jump");
      setTimeout(() => {
        person.classList.remove("jump");
      }, 1500);
    }
  });
}
