const hambuger = document.querySelector(".hambuger");
const ulli = document.querySelector("ul li");

hambuger.addEventListener("click", () => {
    hambuger.classList.toggle("active");
    ulli.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.
    addEventListener("click", () => {
        hambuger.classList.remove("active");
        ulli.classList.remove("active");
    })
)