console.log("JS run")

let icon = document.querySelector("#icons")
let icondiv = document.querySelector(".icon")

icon.addEventListener("click", () => {
    console.log("Icon clicked!");
    icondiv.style.display = 'inline'
    icondiv.style.color = 'blue'
    console.log(icondiv)
  });