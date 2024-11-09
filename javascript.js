const container = document.querySelector("#container");

// let box = document.createElement("div");
// box.classList.add("box");




for (let i = 0; i < 256; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);

    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "red";
    })
}

