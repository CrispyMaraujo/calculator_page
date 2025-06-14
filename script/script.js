const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
    if (display.value.length > 20) {
        display.value = "Input too long";
    } else {
        if (value == ".") {

        } else if (display.value == "0") {
            display.value = input;
        }
    }

}

function clearDisplay() {
    display.value = "";
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
}