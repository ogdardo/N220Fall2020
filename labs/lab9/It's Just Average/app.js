function number() {
    var txt = document.getElementById("number").value;
    var split = txt.split(",");
    var avg = 0;
    var sum = 0;
  

    for(i = 0; i < split.length; i++) {
        sum += parseInt(split[i]);
    }

    avg = sum / split.length;
    document.getElementById("Average").innerHTML="Average:"+avg;
    document.getElementById("Sum").innerHTML="Sum:"+sum; 
    document.getElementById("number").value = "";
}