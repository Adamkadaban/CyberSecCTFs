var box = document.getElementsByClassName('loginBox');
var button = document.getElementById('submit');


// console.log(box[0]);
// console.log(button);

// console.log(button);

var corrUser = 'CBHSCyber';
var corrPass = 'Cy83r_S3c_123';


var errorElem = document.getElementById('errorMessage');

button.addEventListener('click', function(){
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;



    console.log(user);
    console.log(pass);

    var errors = false;
    var outp =[];
    if (user === '' || user == null){
        outp.push("Please enter a username");
    }
    else if (pass === '' || pass == null){
        outp.push("Please enter a password");
    }
    else if (user == corrUser && pass == corrPass){
        window.location.replace("pages.html");
    }
    else {
        outp.push("Incorrect password or username");
    }

    var outString = outp.join("\n");

    errorElem.innerHTML = outString;



})
