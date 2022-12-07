function check() {
    let userSurname = document.getElementById('surname').value;
    let userName = document.getElementById('name').value;
    let userAge = document.getElementById('age').value;
    let userResidence = document.getElementById('residence').value;

    if (userSurname && userName && (userAge > 0 && userAge < 100) && userResidence) {
        document.getElementById('message').style.visibility = "hidden";
        document.getElementById('AjaxGET').disabled = false;
        document.getElementById('AjaxPOST').disabled = false;
    } else {
        document.getElementById('message').style.visibility = "visible";
        document.getElementById('AjaxGET').disabled = true;
        document.getElementById('AjaxPOST').disabled = true;
    }
}

function validateAge() {
    let userAge = document.getElementById('age');

    if (userAge.value > 0 && userAge.value < 100) {
        userAge.classList.remove("error");
    } else {
        userAge.classList.add("error");
        userAge.value = '';
        userAge.focus();
        console.log('Age should be from 1 to 100!');
    }
}

function sendDataByGetMethod() {
    let userData = {
        userSurname: document.getElementById('surname').value,
        userName: document.getElementById('name').value,
        userAge: document.getElementById('age').value,
        userResidence: document.getElementById('residence').value
    };

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/userGet?Surname=" + userData.userSurname + "&Name=" + userData.userName + "&Age=" + userData.userAge + "&Residence=" + userData.userResidence);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();
}

function sendDataByPostMethod() {
    let userData = {
        userSurname: document.getElementById('surname').value,
        userName: document.getElementById('name').value,
        userAge: document.getElementById('age').value,
        userResidence: document.getElementById('residence').value
    };

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/userPost");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(userData));
}

function clearFields() {
    document.getElementById('surname').value = '';
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('residence').value = '';
    check();
}