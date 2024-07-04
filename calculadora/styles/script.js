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
      // checar se a operação atual já possui um ponto
      if(digit === "." && this.currentOperationText.innerText.includes(".")) {
        return
      }

      this.currentOperation = digit
      this.updateScreen()
    }

  // Processo todos os calculos operacionais
  processOperation(operation) {
    

    // Pegar o Valor atual e valor anterior
    let operationValue;
    const previous = +this.previousOperationtext.innerText.split("  ")[0]; 
    const current = +this.currentOperationText.innerText;
    // O + faz com q o valor ja se torne numero na var
    
    switch(operation) {
      case "+":
        operationValue = previous + current
        this.updateScreen(operationValue, operation, current, previous)
        break;
        default:
        return;
    }

  }

    // Mudas os valores na tela da calculadora
    updateScreen(operationValue = null,
       operation = null,
       current = null,
       previous = null) {
        
        if(operationValue === null) {
          this.currentOperationText.innerText += this.currentOperation
        } else {
          // Checar se o valor é zero
          if (previous === 0) {
            operationValue = current
          }

          // Adicionar o valor atual para o anterior
          this.previousOperationtext.innerText = `${operationValue} ${operation}`
          this.currentOperationText.innerText = ""
        }
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
        calc.processOperation(value)
      }
          
    })

})