const display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    } finally {
        setTimeout(() => {
            display.value = "";
        }, 5000);
    }
}
function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}