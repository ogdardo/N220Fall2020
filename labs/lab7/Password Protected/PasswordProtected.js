let txtUsername = document.getElementById("txtUsername");
let txtPassword = document.getElementById("txtPassword");

function VerifyInformation() {
    
    var username = txtUsername.value;
    var password = txtPassword.value;

    if (username == "Username" && password == "Password") {
        dvVerification.innerHTML="Success";
    } else {
        dvVerification.innerHTML="Wrong Information";
    }
}