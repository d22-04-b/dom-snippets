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


// keyboard input ???
window.addEventListener("keydown", (e) => {

  // determine current position in pixel!
  const ballStyle = getComputedStyle(elBall)
  let leftInPx = ballStyle.left;
  let bottomInPx = ballStyle.bottom
  let topInPx = ballStyle.top
  let rightInPx = ballStyle.right

  switch (e.key) {
    case "ArrowLeft":
      console.log("Moving left....");

      // extract pixel number and subtract pixels from left 
      leftInPx = parseInt(leftInPx) - ballSpeedInPx;
      rightInPx = parseInt(rightInPx) + ballSpeedInPx;

      break;
    case "ArrowRight":
      console.log("Moving right....");

      // extract pixel number and add pixels to left
      leftInPx = parseInt(leftInPx) + ballSpeedInPx;
      rightInPx = parseInt(rightInPx) - ballSpeedInPx

      break;
    case "ArrowUp":
      console.log("Moving up...");
      
      // extract pixel number and add pixels to bottom
      bottomInPx = parseInt(bottomInPx) + ballSpeedInPx
      topInPx = parseInt(topInPx) - ballSpeedInPx;

      break;
    case "ArrowDown":
      console.log("Moving down...")
      
      // extract pixel number and subtracting pixels to bottom
      bottomInPx = parseInt(bottomInPx) - ballSpeedInPx;
      topInPx = parseInt(topInPx) + ballSpeedInPx
      break;
  }

  // stop right at => arena width - ball width
  if( leftInPx >= 0 && rightInPx >= 0 )
    elBall.style.left = `${leftInPx}px`;

  if(bottomInPx >= 0 && topInPx >= 0 )
    elBall.style.bottom = `${bottomInPx}px`
});
