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
  let { left, right, top, bottom } = getComputedStyle(elBall);
  
  // convert position strings to pure numbers
  left = parseInt(left);
  right = parseInt(right);
  top = parseInt(top);
  bottom = parseInt(bottom);

  switch (e.key) {
    case "ArrowLeft":
      console.log("Moving left....");

      // extract pixel number and subtract pixels from left
      left -= ballSpeedInPx;
      right += ballSpeedInPx;

      break;
    case "ArrowRight":
      console.log("Moving right....");

      // extract pixel number and add pixels to left
      left += ballSpeedInPx;
      right -= ballSpeedInPx;

      break;
    case "ArrowUp":
      console.log("Moving up...");

      // extract pixel number and add pixels to bottom
      bottom += ballSpeedInPx;
      top -= ballSpeedInPx;

      break;
    case "ArrowDown":
      console.log("Moving down...");

      // extract pixel number and subtracting pixels to bottom
      bottom -= ballSpeedInPx;
      top += ballSpeedInPx;
      break;
  }

  // stop if ball exceed left or right border of container
  if (left >= 0 && right >= 0) 
    elBall.style.left = `${left}px`;

  // stop if ball exceeds top or bottom border of container
  if (bottom >= 0 && top >= 0) 
    elBall.style.bottom = `${bottom}px`;
});
