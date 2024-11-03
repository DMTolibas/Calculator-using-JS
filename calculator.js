
const display = document.getElementById("display");

function AppendToDisplay(input) {
    display.value += input
}

function cleardisplay(input) {
    display.value = null;
}

function calculate(input) {
    try {
        display.value = eval(display.value)
    }
    catch {
        display.value = "Error."
    }
    
}