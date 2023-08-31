var button = document.getElementById("button");
console.log("button:", button)
var numberInsideShape = 1;
var lastShapeNumber = 0;

button.onclick=()=>{
    //input value
    var n = document.getElementById("number").value;
    console.log("This is input value: ", n)

    //option selected
    var circle = document.getElementById("circle").checked;
    console.log("circle: ", circle)
    var square = document.getElementById("square").checked;
    console.log("square: ", square)
    var rectangle= document.getElementById("rectangle").checked;
    console.log("rectangle: ", rectangle)

    //total shapes
    var TotalShapes =  Number(lastShapeNumber) + Number(n);
    console.log("TotalShapes: ", TotalShapes)

    for(let i = numberInsideShape ; i<= TotalShapes ; i++){
            //create box variable
    var box =document.getElementById("box");

    //creating a div
    var shape = document.createElement("div");

    shape.innerHTML = numberInsideShape

    //increment number by 1
    numberInsideShape = numberInsideShape+1

    //adding class to the div created
    if(square==true){
        shape.classList.add("square");
    }
     else if (circle == true){
        shape.classList.add("circle");
     }
    else if (rectangle == true){
         shape.classList.add("rectangle");
    }
    console.log("shape: ", shape)

    //inserting the div created into the box
    box.append(shape);

    //take out last number from div
    lastShapeNumber= box.lastElementChild.innerHTML
    }
}
