let loginInfo = [["stephen", "password"], ["richard", "password"], ["chenzeyu", "password"]];

function validateForm() {
    var x = document.forms["myForm"]["username"].value;
    var y = document.forms["myForm"]["password"].value;
    if (x === "" && y === "") {
        alert("Username and password must be filled");
        return false;
    } if (x === "") {
        alert("Username must be filled");
        return false;
    } if (y === "") {
        alert("Password must be filled");
        return false;
    }

    var canLogin = false;
    for (var i of loginInfo) {
        if (i[0] === x && i[1] === y) canLogin = true;
    }
    if (!canLogin) {
        alert("Incorrect set of username and password");
    }
    return canLogin;
}