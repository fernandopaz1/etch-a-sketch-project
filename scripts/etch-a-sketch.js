let containerWidth= 600;
const BORDER_WIDTH=1;

function addGrid(){
    document.getElementById("gridContainer").innerHTML +=  
    '<div class="gridUnit gridSize">&nbsp</div>';
}

function addGridFile(cantColumnas){
    for(let i=0;i<cantColumnas;i++){
        addGrid();
    }
    document.getElementById("gridContainer").innerHTML +=  
    '<br class="break">';   
}

function addAuxiliarStyles(files,rows){
    console.log("Files: "+files)
    console.log("Rows:  "+rows)
    let width= (containerWidth-rows*BORDER_WIDTH*2)/rows;
    let height=width;
    console.log("width: "+width)
    console.log("height:  "+height)
    var editCss = document.getElementById("auxiliarStyles");
    editCss.innerHTML+=`<style>
    .gridContainerSize{width: ${containerWidth};}
    .gridSize {min-width: ${width}px; min-height: ${height}px;}</style>`
}

function removeAuxiliarStyles(){
    var element = document.getElementById("auxiliarStyles");
    if(element==null) return;
    var editCss = document.getElementById("auxiliarStyles");
    editCss.innerHTML+="";
}

function isAvalidDimension(dimension){
    if(dimension==null) return false;
    if(!Number.isInteger(dimension)) return false;
    if(dimension<=0 || dimension>65) return false;
    return true;
}

function addGridMatrix(files,rows){
    if(!isAvalidDimension(files) || !isAvalidDimension(rows)) return;
 
    addAuxiliarStyles(files,rows);
    
    for(let i=0;i<files;i++){
        addGridFile(rows);
    }
}

addGridMatrix(16,16)
addHoverListener();

function addHoverListener(){
    document.querySelectorAll("div.gridUnit").forEach((grid) => {
        grid.addEventListener("mouseover", (e)=>{
            e.target.classList.remove("gridWhite");
            e.target.classList.add("gridBlack");    
        })
    })
}
document.getElementById("btnClean").addEventListener("click", ()=>{
    document.querySelectorAll("div.gridUnit").forEach((grid) => {
        grid.classList.remove("gridBlack");
        grid.classList.add("gridWhite");
    })
});

function removeGridMatrix(){
    var container = document.querySelector("div#gridContainer");
    container.innerHTML="";
}

document.getElementById("btnChangeFilesRows").addEventListener("click", ()=> {
    let files= +prompt("How many files do you want?");
    let rows = +prompt("How many rows do you want?");

    while(!isAvalidDimension(files)){
        alert("Invalid value of files. Please input a numer between 1 and 64")
        files= +prompt("How many files do you want?");
    }
    while(!isAvalidDimension(rows)){
        alert("Invalid value of rows. Please input a numer between 1 and 64")
        rows= +prompt("How many rows do you want?");
    }
    removeGridMatrix();
    addGridMatrix(files,rows);
    addHoverListener();
})

function isAvalidSize(size){
    if(size==null) return false;
    if(!Number.isInteger(size)) return false;
    if(size<=100 || size>960) return false;
    return true;
}

document.getElementById("btnChangeSize").addEventListener("click", ()=> {
    let size= +prompt("How width (in pixels) do you want?");
    
    while(!isAvalidSize(size)){
        alert("Invalid value of size. Please input a numer between 100 and 960")
        size= +prompt("How width (in pixels) do you want?");
    }
    
    containerWidth=size;
    removeAuxiliarStyles();
    removeGridMatrix();
    addGridMatrix(16,16);
    addAuxiliarStyles(16,16);
    addHoverListener();
})