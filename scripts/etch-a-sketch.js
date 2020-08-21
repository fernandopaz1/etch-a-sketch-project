
function addGridFile(cantColumnas){
    for(let i=0;i<cantColumnas;i++){
        addGrid();
    }
    document.getElementById("gridContainer").innerHTML +=  
    "<br>";   
}

function addGrid(){
    document.getElementById("gridContainer").innerHTML +=  
    "<div class='gridUnit'></div>";
}

addGridFile(16);