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
 *   - add "px" string to new position
 *   - assign pixels string to position
 */

const elBall = document.querySelector(".ball");
const elMain = document.querySelector("main");

const ballSpeedInPx = 20;

// handle keyboard input
window.addEventListener("keydown", (e) => {
  
  // determine current position in pixel!
  const ballStyle = getComputedStyle(elBall);
  let leftInPx = ballStyle.left;
  let bottomInPx = ballStyle.bottom;
  let topInPx = ballStyle.top;
  let rightInPx = ballStyle.right;

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
      rightInPx = parseInt(rightInPx) - ballSpeedInPx;

      break;
    case "ArrowUp":
      console.log("Moving up...");

      // extract pixel number and add pixels to bottom
      bottomInPx = parseInt(bottomInPx) + ballSpeedInPx;
      topInPx = parseInt(topInPx) - ballSpeedInPx;

      break;
    case "ArrowDown":
      console.log("Moving down...");

      // extract pixel number and subtracting pixels to bottom
      bottomInPx = parseInt(bottomInPx) - ballSpeedInPx;
      topInPx = parseInt(topInPx) + ballSpeedInPx;
      break;
  }

  // stop if ball exceed left or right border of container
  if (leftInPx >= 0 && rightInPx >= 0) 
    elBall.style.left = `${leftInPx}px`;

  // stop if ball exceeds top or bottom border of container
  if (bottomInPx >= 0 && topInPx >= 0) 
    elBall.style.bottom = `${bottomInPx}px`;
});
