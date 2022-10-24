document.addEventListener("DOMContentLoaded", start);

function start() {
  const minimumMarginDeath = 694;
  const maximumMarginDeath = 850;
  const minimumJump = 60;
  let actualPersonPosition;
  let actualPersonPositionJump;
  let keyBoardKey = "";
  const person = window.document.querySelector(".person");

  // minumum value margin 680px
  // maximum margin 900px

  const runDetector = setInterval(() => {
    actualPersonPosition = parseInt(window.getComputedStyle(person).marginLeft);
    actualPersonPositionJump = parseInt(
      window.getComputedStyle(person).marginBottom
    );
    console.log(actualPersonPositionJump);
    if (
      actualPersonPosition >= minimumMarginDeath &&
      actualPersonPosition <= maximumMarginDeath &&
      actualPersonPositionJump <= minimumJump
    ) {
      person.style.animationPlayState = "paused";
      person.style.backgroundColor = "blue";
      clearInterval(runDetector);
    }
  }, 100);

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
