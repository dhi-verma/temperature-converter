// Get DOM elements
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const clearBtn = document.getElementById('clearBtn');

// Conversion functions
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Round to 2 decimal places
function roundToTwo(num) {
    return Math.round(num * 100) / 100;
}

// Event listener for Celsius input
celsiusInput.addEventListener('input', function() {
    const celsiusValue = parseFloat(this.value);
    
    if (this.value === '' || isNaN(celsiusValue)) {
        fahrenheitInput.value = '';
        return;
    }
    
    const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
    fahrenheitInput.value = roundToTwo(fahrenheitValue);
});

// Event listener for Fahrenheit input
fahrenheitInput.addEventListener('input', function() {
    const fahrenheitValue = parseFloat(this.value);
    
    if (this.value === '' || isNaN(fahrenheitValue)) {
        celsiusInput.value = '';
        return;
    }
    
    const celsiusValue = fahrenheitToCelsius(fahrenheitValue);
    celsiusInput.value = roundToTwo(celsiusValue);
});

// Clear button functionality
clearBtn.addEventListener('click', function() {
    celsiusInput.value = '';
    fahrenheitInput.value = '';
    celsiusInput.focus();
});

// Set focus on page load
window.addEventListener('load', function() {
    celsiusInput.focus();
});
