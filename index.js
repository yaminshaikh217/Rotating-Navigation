const btn = document.getElementById("open")
const btn2 = document.getElementById("close")
const container = document.getElementById("containers")

btn.addEventListener("click", () => {

    container.classList.add("show-nav")
})

btn2.addEventListener("click", () => {
    container.classList.remove("show-nav")
})

