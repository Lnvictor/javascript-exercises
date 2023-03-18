const startButton = document.querySelector("[data-start]");
const resultTextArea = document.querySelector("[data-result]")
const operationText = "Digite a operação matemática:\n[1]: +\n[2]: -\n[3]: *\n[4]: /";

const operation = {
    '1': '+',
    '2': '-',
    '3': '*',
    '4': '/'
}

startButton.onclick = () => {
    try {
        firstNumber = prompt('Digite o primeiro número');
        secondNumber = prompt('Digite o segundo número');
        operationKey = prompt(operationText);
        
        resultTextArea.textContent = eval(`${firstNumber}${operation[operationKey]}${secondNumber}`)
        
    } catch (error) {
        alert('Operação inválida')
    }
};