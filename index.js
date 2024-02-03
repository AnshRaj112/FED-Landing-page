function openSignInBox() {
    document.getElementById("signinBox").style.display = "block";
}

function closeSignInBox() {
    document.getElementById("signinBox").style.display = "none";
}

// Function to open the Sign In box
function openSignInBox() {
    document.getElementById('landingPage').style.display = 'none';
    document.getElementById('signinBox').style.display = 'block';
    document.getElementById('createAccountBox').style.display = 'none';
}

// Function to open the Create Account box
function openCreateAccountBox() {
    document.getElementById('landingPage').style.display = 'none';
    document.getElementById('signinBox').style.display = 'none';
    document.getElementById('createAccountBox').style.display = 'block';
}

// Function to close the Sign In or Create Account box
function closeSignInBox() {
    document.getElementById('landingPage').style.display = 'block';
    document.getElementById('signinBox').style.display = 'none';
    document.getElementById('createAccountBox').style.display = 'none';
}

function signIn(event) {
    
    event.preventDefault(); 
}


function createAccount(event) {

    event.preventDefault(); 
}
