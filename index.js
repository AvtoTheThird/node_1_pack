const packageInfo = require('./package.json');
console.log(`Greetings! Running version ${packageInfo.version} of the app ${packageInfo.name}`);

function ReversePolishNotationFunction(input) {
    const tokens = input.split(" ");
    const stack = [];

    tokens.forEach(token => {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {

            const b = stack.pop();
            const a = stack.pop();

            switch (token) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(a / b);
                    break;
                case '^':
                    stack.push(a ** b);
                    break;
                default:
                    throw new Error(`Unknown operator: ${token}`);
            }
        }
    });

    return stack.pop();
}
module.exports = { ReversePolishNotationFunction };