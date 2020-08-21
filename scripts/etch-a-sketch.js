function addGrid(){
    document.getElementById("gridContainer").innerHTML +=  
    '<div class="gridUnit">Hi</div>';
}

function addGridFile(cantColumnas){
    for(let i=0;i<cantColumnas;i++){
        addGrid();
    }
    document.getElementById("gridContainer").innerHTML +=  
    "<br>";   
}


function addGridMatrix(files,rows){
    if(files==null || rows==null) return;
    if(!Number.isInteger(files) || !Number.isInteger(rows)) return;
    if(files<=0 && rows<=0) return;
    for(let i=0;i<files;i++){
        addGridFile(rows);
    }
}

addGridMatrix(16,16)

const divs = document.querySelectorAll("div.gridUnit");

divs.forEach((grid) => {
    grid.addEventListener("mouseover", (e)=>{
        e.target.classList.remove("gridWhite");
        e.target.classList.add("gridBlack");    
    })
})
