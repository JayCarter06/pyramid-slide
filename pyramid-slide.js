
function sliderFunction()
{
    var brick = document.getElementById("brickType").value;
    var slide = document.getElementById("slider").value;
    document.getElementById("height").innerHTML = slide;
    drawPyramid(slide, brick);
}

 function drawPyramid(height, brick) 
 {

    document.getElementById("pyramid").innerHTML = ""

    
     for (var row = 0; row < height; row++) 
     {

     
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

        
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += ".";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += brick;
         }

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
