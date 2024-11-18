let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let array = Array.from(buttons);

array.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                // Log the input string before eval
                console.log("Input string before eval:", string);
                
                // Basic validation to prevent invalid input
                if (string) {
                    // Replace any invalid characters or patterns here
                    string = string.replace(/[^0-9+\-*/().]/g, '');
                    // Evaluate the expression
                    let result = eval(string);
                    input.value = result;
                    string = result.toString(); // Update string for further calculations
                }
            } catch (error) {
                input.value = "Error"; // Display error if eval fails
                string = ""; // Reset string
            }
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});