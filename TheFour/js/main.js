var bottomLeftDiv = document.getElementById('body');

var upperLeftDiv = document.getElementById('upperLeftDiv');
const defaultUpperLeftDivWidth = document.getElementById('upperLeftDiv').style.width;
const defaultUpperLeftDivHeight = document.getElementById('upperLeftDiv').style.height;

var upperRightDiv = document.getElementById('upperRightDiv');
const defaultUpperRightDivWidth = document.getElementById('upperRightDiv').style.width;
const defaultUpperRightDivHeight = document.getElementById('upperRightDiv').style.height;

var bottomRightDiv = document.getElementById('bottomRightDiv');
const defaultBottomRightDivWidth = document.getElementById('bottomRightDiv').style.width;
const defaultBottomRightDivHeight = document.getElementById('bottomRightDiv').style.height;

var bottomLeftDiv = document.getElementById('bottomLeftDiv');
const defaultBottomLeftDivWidth = document.getElementById('bottomLeftDiv').style.width;
const defaultBottomLeftDivHeight = document.getElementById('bottomLeftDiv').style.height;

// A function to reset the height and width of the four corner divs.
function defaultDivHeightAndWidth() {
    document.getElementById('upperLeftDiv').style.width = defaultUpperLeftDivWidth;
    document.getElementById('upperLeftDiv').style.height = defaultUpperLeftDivHeight;

    document.getElementById('upperRightDiv').style.width = defaultUpperRightDivWidth;
    document.getElementById('upperRightDiv').style.height = defaultUpperRightDivHeight;

    document.getElementById('bottomRightDiv').style.width = defaultBottomRightDivWidth;
    document.getElementById('bottomRightDiv').style.height = defaultBottomRightDivHeight;

    document.getElementById('bottomLeftDiv').style.width = defaultBottomLeftDivWidth;
    document.getElementById('bottomLeftDiv').style.height = defaultBottomLeftDivHeight;
}

// A function to expand the upper left div when it is clicked.
function upperLeftDivClick() {
    defaultDivHeightAndWidth();
    upperLeftDiv.style.width = "100vw";
    upperLeftDiv.style.height = "100vh";

    upperLeftDiv.style.zIndex = 0;
    upperRightDiv.style.zIndex = 1;
    bottomRightDiv.style.zIndex = 1;
    bottomLeftDiv.style.zIndex = 1;
}

// A function to expand the upper right div when it is clicked.
function upperRightDivClick() {
    defaultDivHeightAndWidth();
    upperRightDiv.style.width = "100vw";
    upperRightDiv.style.height = "100vh";

    upperLeftDiv.style.zIndex = 1;
    upperRightDiv.style.zIndex = 0;
    bottomRightDiv.style.zIndex = 1;
    bottomLeftDiv.style.zIndex = 1;
}

// A function to expand the bottom right div when it is clicked.
function bottomRightDivClick() {
    defaultDivHeightAndWidth();
    bottomRightDiv.style.width = "100vw";
    bottomRightDiv.style.height = "100vh";

    upperLeftDiv.style.zIndex = 1;
    upperRightDiv.style.zIndex = 1;
    bottomRightDiv.style.zIndex = 0;
    bottomLeftDiv.style.zIndex = 1;
}

// A function to expand the bottom left div when it is clicked.
function bottomLeftDivClick() {
    defaultDivHeightAndWidth();
    bottomLeftDiv.style.width = "100vw";
    bottomLeftDiv.style.height = "100vh";

    upperLeftDiv.style.zIndex = 1;
    upperRightDiv.style.zIndex = 1;
    bottomRightDiv.style.zIndex = 1;
    bottomLeftDiv.style.zIndex = 0;
}

function changeBodyColor() {

}