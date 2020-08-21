
function addGridFile(cantColumnas){
    for(let i=0;i<cantColumnas;i++){
        addGrid();
    }
    document.getElementById("gridContainer").innerHTML +=  
    "<br>";   
}

function addGrid(){
    document.getElementById("gridContainer").innerHTML +=  
    '<div class="gridUnit">Hi</div>';
}

function changeDivColour(e){
    e.target.classList.remove("gridWhite");
    e.target.classList.add("gridBlack");
}



for(let i=0;i<16;i++){
    addGridFile(16);
}

const divs = document.querySelectorAll("div.gridUnit");

console.log(divs)

divs.forEach((grid) => {
    grid.addEventListener("mouseover", changeDivColour)
})
