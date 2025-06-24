//import { evaluate  } from 'mathjs';
// Using mathjs library to evaluate mathematical expressions
// Ensure you have included the mathjs library in your HTML file
// <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/9.4.4/math.min.js"></script>
// If you are using a module system, you can import it like this:
// import { evaluate } from 'mathjs';
const display = document.getElementById("display");
function appendToDisplay(value) {
    display.value += value;
    }
function calculate() {
    try {
        display.value = math.evaluate(display.value);
    } catch (error) {
        display.value = "Error";
        setTimeout(() => {
            display.value = "";
        }, 5000);
    }
}
function clearDisplay() {
    display.value = "";
    }
function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
    }
// This code is for a simple calculator that allows users to input mathematical expressions
// and evaluates them using the mathjs library. The display is updated with the result or an error message.
// The display is cleared after 5 seconds if an error occurs, and the last character can be deleted.




//Old code that used eval() for calculation, which is not recommended due to security risks
// Uncomment the following lines if you want to use the old code with eval()





/*function appendToDisplay(value) {
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
}*/