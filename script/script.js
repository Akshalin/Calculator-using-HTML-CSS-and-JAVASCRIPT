const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
let expression = '';
function updateDisplay() {
    display.innerText = expression;
}
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;
        if (value === 'C') {
            expression = '';
        } else if (value === '=') {
            try {
                expression = eval(expression).toString();
            } catch {
                expression = 'Error';
            }
        } else {
            expression += value;
        }
        updateDisplay();
    });
});
updateDisplay();