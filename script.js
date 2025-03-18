function checkFare() {
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const outputBox = document.getElementById("fareOutput");
    const age = parseInt(ageInput.value);
    const name = nameInput.value;

    if (isNaN(age) || age <= 0) {
        outputBox.value = "Please enter a valid age.";
    } else if (age <= 19) {
        outputBox.value = name + ", You can pay child's fare.";
    } else {
        outputBox.value = name + ", You must pay the adult fare.";
    }
}

function getCuisine() {
    const userNameInput = document.getElementById("userName");
    const cuisineInput = document.getElementById("cuisine");
    const outputArea = document.getElementById("cuisineOutput");
    const userName = userNameInput.value;
    const cuisine = cuisineInput.value;

    if (userName.trim() === "" || cuisine.trim() === "") {
        outputArea.value = "Please enter your name and desired cuisine.";
    } else {
        outputArea.value = "Name: " + userName + "\nDesired Cuisine: " + cuisine;
    }
}