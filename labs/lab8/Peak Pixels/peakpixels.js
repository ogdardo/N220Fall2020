let dvTostyle = document.querySelector("#myDiv");
let dvWidth = 100;
let dvHeight = 100;
let dvColor = "#00FF00";

dvTostyle.style.dvwidth = dvWidth + "px";
dvTostyle.style.height = dvHeight + "px"; 
dvTostyle.style.backgroundColor = dvColor;

function onClick() {
    dvWidth = dvWidth * 1.1;
    dvHeight = dvHeight * 1.1;

    dvTostyle.style.height = dvHeight + "px";
    dvTostyle.style.height = dvHeight + "px"; 
}