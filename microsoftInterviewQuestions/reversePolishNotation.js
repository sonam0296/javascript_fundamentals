// Reverse Polish Notation i.e RPN is a mathematical notation which follows all its operands.

// To evaluate an arithmetic expression in RPN, we use stack data structure

function reversePolishNotation(array) {
    let stack = []

    for (let i = 0; i < array.length; i++) {
        // Check if the element is number or any special character
        if (!isNaN(array[i])) {
            stack.push(Number(array[i]))
        }
        // if element is special character than perform the action
        else {
            const operand2 = stack.pop()
            const operand1 = stack.pop()

            switch (array[i]) {
                case '+':
                    stack.push(operand1 + operand2)
                    break;
                case '-':
                    stack.push(operand1 - operand2)
                    break;
                case '*':
                    stack.push(operand1 * operand2)
                    break;
                case '/':
                    stack.push(Math.trunc(operand1 / operand2))   // Math.trunc() --> returns only the integer part and remove fractions.
                    break;
                default:
                    break;
            }
        }
    }
    return stack.pop()
}

const tokens = ['2', '1', '+', '3', '/'];
console.log(reversePolishNotation(tokens));