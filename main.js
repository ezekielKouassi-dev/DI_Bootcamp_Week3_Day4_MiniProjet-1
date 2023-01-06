let container = document.querySelector('.container');
let btnClearContainer = document.querySelector('.btn-clear-container');
let colorsSection = document.querySelector('.colors-section');
let leftSection = document.querySelector('.left-section');
let rightSection = document.querySelector('.right-section');

(function configHeight(){
    container.style.height = window.innerHeight + "px";
})();

(function createBtnClear(){
    let btnClear = document.createElement('button');
    btnClear.style.width = "100%";
    btnClear.style.height = "50px";
    let btnClearText = document.createTextNode('Clear');
    btnClear.appendChild(btnClearText);
    btnClearContainer.appendChild(btnClear);
})();

(function createColorsBox(){
    let colors = [
        "#ff0000", "#ff4500", "#ffa500", "#ffff00", "#9acd32", "#90ee90",
        "#008000", "#40e0d0", "#00ffff", "#87cefa", "#1e90ff", "#0000ff",
        "#00008b", "#4b0082", "#8b008b", "#ee82ee", "#ffb6c1", "#d3d3d3",
        "#808080", "#000000", "#ffffff"
    ];

    colors.forEach(element => {
        let colorBox = document.createElement('div');
        // colorBox.style.width = leftSection.offsetWidth/3 + "px";
        // colorBox.style.height = leftSection.offsetWidth/3 + "px";
        colorBox.classList.add('colorBox');
        colorBox.style.backgroundColor = element;
        colorsSection.appendChild(colorBox);
    });

})();

(function createRigthSection(){
    for(let i = 0; i < 1680; i++) {
        let boxToFillColor = document.createElement('div');
        boxToFillColor.classList.add('boxToFillColor');
        rightSection.appendChild(boxToFillColor);
    }

})();

(function fillColor(){
    let boxes = document.querySelectorAll('.colorBox');
    let boxToFillColor = document.querySelectorAll('.boxToFillColor');
    let btnClear = document.querySelector('button');
    let color;
    boxes.forEach(element => {
        element.addEventListener('click', (event) => {
            color = event.target.style.backgroundColor;
        });
    });

    boxToFillColor.forEach(element => {
        element.addEventListener('click', () => {
            element.style.backgroundColor = color;
        });
    });

    btnClear.addEventListener('click', () => {
        boxToFillColor.forEach(element => {
            element.style.backgroundColor = "#ffffff";
        });
    });

})();