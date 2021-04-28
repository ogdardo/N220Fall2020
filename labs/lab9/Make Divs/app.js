let dvFound = document.getElementById("dvFound");

let objects = [
    { color: "#FF0000", height: 100, width: 300 },
    { color: "#FFFF00", height: 200, width: 200 },
    { color: "#ff0000", height: 300, width: 100 },
   ];

   function makeDivs () {

    for (var i=0; 1 < objects.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = objects[i].color + ", " + objects[i].height + ", " + objects[i].width;
        dvFound.appendChild(div);
    }
   }