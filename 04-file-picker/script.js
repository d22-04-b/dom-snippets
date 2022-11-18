/**
 * - Grab File Input Element
 * - React to clicks
 * - Convert selected image to string
 * - show selected image instead of placeholder image
 */

const elFileDialog = document.querySelector("input[type='file']");
const elSearchBar = document.querySelector("input[type='text']");
const elAvatarImg = document.querySelector("img") 

elFileDialog.addEventListener("change", (e) => {

  // no file selected? do nothing
  if(!e.target.files.length) return

  // file is uploaded and stored temporary in the browser as a BLOB
  // Binary Large Object
  const blob = e.target.files[0];

  // create link to BLOB
  const url = URL.createObjectURL(blob)
  console.log(url)

  // blob link we can use as image source!
  elAvatarImg.src = url
})

// input event makes sense if we really wanna do something on each input kestroke
// - live validation as you type
// - live search
// elSearchBar.addEventListener("input", () => {
//   console.log(elSearchBar.value)
// })

// change event makes sense if we wanna VALIDATE the input of the user once finished typing
elSearchBar.addEventListener("change", () => {
  console.log(elSearchBar.value)
})