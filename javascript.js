const container = document.querySelector("#container");

// let box = document.createElement("div");
// box.classList.add("box");

function changeBoxNumber() {
    let gridItems = prompt("Enter a number: ");
    
    
    while (container.firstChild) {
        container.firstChild.remove()
    }

    

    for (let i = 0; i < gridItems*gridItems; i++) {
        let box = document.createElement("div");
        box.style.flexBasis = `calc(100% / ${gridItems})`;
        box.classList.add("box");
        container.appendChild(box);
    
        box.addEventListener("mouseover", () => {
            
            box.style.backgroundColor = getRandomColor();
        })
    }
}


function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const button = document.querySelector("#button");
button.addEventListener ("click", () => {
    changeBoxNumber();
})




