const generateBtn = document.getElementById("generateBtn");

const singleHexColorGenerator =() => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F" ];

    let hexcolor = "#";

    for (let i = 0; i <6; i++) {
        let random = Math.floor(Math.random() * hex.length);
        hexcolor += hex[random];
    }

    return hexcolor;
};

const colorpaletteGenerator = () => {
    const colorpalette = [];
    for (let i = 0; i < 4; i++) {
        colorpalette.push(singleHexColorGenerator());
    }
    return colorpalette;
};

const rendercolorpalette = () => {
    const colorscontainer = document.querySelector(".colors_container");

    colorscontainer.innerHTML = "";

    const colorpalette = colorpaletteGenerator();

    colorpalette.forEach((color, i) => {
        const colorDiv = document.createElement("div");
        colorDiv.id = 'color${i + 1}';
        colorDiv.style.background = color;
        colorDiv.className = "colorBox";
        const colorTag = document.createElement('p');
        colorTag.id = 'color${i + 1}Tag';
        colorTag.className = "colorTag";
        colorTag.innerHTML = color;
        colorDiv.appendChild(colorTag);
        colorscontainer.appendChild(colorDiv);
    });

    const copytoclipBoard = (id) => {
        const el = document.getElementById(id);
        navigator.clipboard
        .writeText(el.innerText)
        .than(() => {
            alert("copied to clipboard");
        })
        .catch((err) => {
            alert("could not copy");
        });
    };

    const colorTags = document.querySelectorAll(".colorTag");
    colorTags.forEach((colorTag, i) => {
        colorTag.addEventListener("click", () => 
        copytoclipBoard ('color${i + 1}Tag')
        );

        });
    };
   

    rendercolorpalette();
generateBtn.addEventListener("click", rendercolorpalette);