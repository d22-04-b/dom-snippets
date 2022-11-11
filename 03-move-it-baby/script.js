/**
 * - grab ball DOM element
 * - add keyboard listener
 *   - when left pressed: move left => left -
 *   - when right pressed: move right => left +
 *   - when up pressed: move up  => top: -
 *   - when down pressed: move down => top: +
 * - how to calculate new position?
 *   - take old position
 *   - extract position pixels as number
 *   - add 20 pixel on top
 *   - add px to new number 
 */

const elBall = document.querySelector(".ball");
const elMain = document.querySelector("main");

const ballSpeedInPx = 20

console.log(elMain)

const ballWidthInPx = parseInt( getComputedStyle(elBall).width )
const arenaWidthInPx = parseInt( getComputedStyle(elMain).width )
const arenaHeightInPx = parseInt( getComputedStyle(elMain).height)

console.log({ arenaWidthInPx, arenaHeightInPx, ballWidthInPx })

// keyboard input ???
window.addEventListener("keydown", (e) => {

  // determine current position in pixel!
  let newLeftInPixel = getComputedStyle(elBall).left;
  let newBottomInPixel = getComputedStyle(elBall).bottom

  switch (e.key) {
    case "ArrowLeft":
      console.log("Moving left....");

      // extract pixel number and subtract pixels from left 
      newLeftInPixel = parseInt(newLeftInPixel) - ballSpeedInPx;

      break;
    case "ArrowRight":
      console.log("Moving right....");

      // extract pixel number and add pixels to left
      newLeftInPixel = parseInt(newLeftInPixel) + ballSpeedInPx;

      break;
    case "ArrowUp":
      console.log("Moving uo...");

      // extract pixel number and add pixels to bottom
      newBottomInPixel = parseInt(newBottomInPixel) + ballSpeedInPx

      break;
    case "ArrowDown":
      // extract pixel number and subtracting pixels to bottom

      newBottomInPixel = parseInt(newBottomInPixel) - ballSpeedInPx;
      break;
  }

  // console.log({ left: newLeftInPixel, bottom: newBottomInPixel })

  // stop right at => arena width - ball width
  if(newLeftInPixel >= 0 &&  newLeftInPixel <= (arenaWidthInPx-ballWidthInPx) )
    elBall.style.left = `${newLeftInPixel}px`;

  if(newBottomInPixel >= 0 && newBottomInPixel <= (arenaHeightInPx-ballWidthInPx))
    elBall.style.bottom = `${newBottomInPixel}px`
});
