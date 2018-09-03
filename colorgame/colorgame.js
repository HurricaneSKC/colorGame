var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

// easy button
easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

// hard button
hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});


// reset button
resetButton.addEventListener("click", function(){
    // generate all new colors
    colors = generateRandomColors(numSquares);
    //pick new random color
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    // empty message display string
    messageDisplay.textContent = "";
    //change colors of square
    for(var i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }    
    h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = pickedColor;

for(var i=0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    
    // add click listeners to squares
    squares[i].addEventListener(("click"),function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to PickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
};

function changeColors(color){
    //loop through all squares
    for(var i=0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color;
    }
};

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(num){
    // make an array 
    var arr = [];
    //add num random colors
    for(var i=0; i < num; i++){
        //get random color to push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
};

function randomColor(){
    // pick a random color red 0 to 250
    var r = Math.floor(Math.random() * 256);
    // pick a random color green 0 to 250
    var g = Math.floor(Math.random() * 256);
    // pick a random color blue 0 to 250
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
};