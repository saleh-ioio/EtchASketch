
let colorMOde = true; //true : solid color / false : random
let paintColor = "rgb(0,0,0)";


function menuSetup(){
    let colorpicker = document.querySelector('#paintColor');
    colorpicker.addEventListener('input' , (e) => {
        paintColor = e.target.value;

    })

    let gridSizebtn =document.querySelector('#resetGridSize');
    let gridSizeSlider = document.querySelector('#gridSizeSlider');
    let gridSizeText = document.querySelector('#rangeText');
    gridSizeText.textContent =  `grid size: ${gridSizeSlider.value} x ${gridSizeSlider.value}`;


    gridSizeSlider.addEventListener('input', function(e){
        gridSizeText.textContent =`grid size: ${e.target.value} x ${e.target.value}`;
    })
     gridSizebtn.onclick = function(){
        let gridSize = gridSizeSlider.value;
        deleteGrid();
        gridSetup(gridSize);
     }


     let randomizerbtn = document.querySelector('#randomizeBtn');
     randomizerbtn.onclick = function(){
        colorMOde = !colorMOde;
     }
}


function deleteGrid(){
let mainElemnt = document.querySelector("main");
while(mainElemnt.firstChild){
    mainElemnt.removeChild(mainElemnt.firstChild);
}
}

function gridSetup(gridSize){
let mainElemnt = document.querySelector("main");
for (let index = 0; index < gridSize; index++) {
    const row = document.createElement("div");
    row.classList += "row";
    
for (let i = 0; i < gridSize; i++) {
    const item = document.createElement("div");
    item.classList += "item";
    
    item.onclick = function(){
        if(e.buttons > 0){
            if(colorMOde){
            item.style.background =paintColor;
        }else{
            let randomNum = Math.random() * 367;
            let randomColorhsl = `hsl(${randomNum} , 100%, 50%)`;
            item.style.background = randomColorhsl;
        }}
    };

    item.onmouseover = function(e){
        if(e.buttons > 0){
            if(colorMOde){
            item.style.background =paintColor;
        }else{
            let randomNum = Math.random() * 367;
            let randomColorhsl = `hsl(${randomNum} , 100%, 50%)`;
            item.style.background = randomColorhsl;
        }}
    }

    row.append(item);
    mainElemnt.append(row);
}

}
}
gridSetup(16);
menuSetup();