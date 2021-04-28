let badWords = ["clear", "water", "tires"];

let count;
function detectWord () {
    count = 0;
    let text = " ";
    text = document.getElementById("sent").value;
    let words = [];
    words = text.split (" ");

    for (let i=0; i < badWords.length; i++) {
        for (let j=0; j < words.length; j++) {
            if (words[j] == badWords[i]) {
                count ++;
            }
        }
    }
    if (count == 0) {
        document.querySelector(".message").innerHTML = "No Bad Word Detected";

    }else {
        document.querySelector(".message").innerHTML = "Bad Word Detected <br> Total:  " + count;
    }
    document.getElementById("sent").value = " ";
}