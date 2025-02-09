let display = document.getElementById("display");
let themeToggle = document.querySelector(".theme-toggle");
let isDarkMode = true; 

function appendCharacter(char) {
    if (display.value === "0" || display.value === "Error") display.value = "";

    let lastChar = display.value.slice(-1);


    if (["+", "-", "*", "/", "%"].includes(char) && ["+", "-", "*", "/", "%"].includes(lastChar)) {
        return;
    }

  
    let lastNum = display.value.split(/[\+\-\*\/%]/).pop();
    if (char === "." && lastNum.includes(".")) {
        return;
    }

    display.value += char;
}

function clearDisplay() {
    display.value = "0";
}

function backspace() {
    display.value = display.value.length > 1 ? display.value.slice(0, -1) : "0";
}

function calculate() {
    try {
        let result = eval(display.value.replace(/[^0-9+\-*/.%]/g, ''));

        if (!isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch {
        display.value = "Error";
    }
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    themeToggle.innerHTML = isDarkMode ? "🌙" : "☀️";  
}

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("dark-mode");
});
