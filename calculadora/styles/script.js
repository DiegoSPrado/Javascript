// Seleção de Elementos

const previousOperationtext = document.querySelector("#last-calc")
const currentOperationText = document.querySelector("#result")
const buttons = document.querySelectorAll("#keyboard button")

class Calculator {
    constructor(previousOperationtext, currentOperationText) {
        this.previousOperationtext = previousOperationtext
        this.currentOperationText = currentOperationText
        this.currentOperation = ""
    }
    // Adiciona os digitos na tela da calculadora
    addDigit(digit) {

        this.currentOperation = digit
        this.updateScreen()
    }

    // Mudas os valores na tela da calculadora
    updateScreen() {
        this.currentOperationText.innerText += this.currentOperation
    }
}



// Funções

const calc = new Calculator(previousOperationtext, currentOperationText)

// Eventos

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {

      const value = e.target.innerText;

      if(+value >= 0 || value === ".") {
        calc.addDigit(value)
      } else {
        console.log("Op: " + value)
      }
          
    })

})