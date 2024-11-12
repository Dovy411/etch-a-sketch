const container = document.querySelector("#container");

// let box = document.createElement("div");
// box.classList.add("box");

function changeBoxNumber() {
    let gridItems = prompt("Enter a number: ");
    
    while (gridItems > 20) {
        let gridItems = prompt("No more than 20: ");
        if (gridItems < 20) {
            break;
        }
    }
    
    while (container.firstChild) {
        container.firstChild.remove()
    }

    

    for (let i = 0; i < gridItems*gridItems; i++) {
        let box = document.createElement("div");
        box.style.flexBasis = `calc(100% / ${gridItems})`;
        box.classList.add("box");
        container.appendChild(box);

        let opacity = 0.2;
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "black"; //getRandomColor()
            opacity += 0.2;
            box.style.opacity = opacity;
        })
    }
}

function increaseOpacity() {
    let opacity = 0;
    for (let i = 0; i < 10; i++) {
        opacity += 0.1;
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




