// Seleção de Elementos

const previousOperationtext = document.querySelector("#last-calc")
const currentOperationText = document.querySelector("#result")
const buttons = document.querySelectorAll("#keyboard button")


// Funções
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
    //Checar se o o valor atual esta vazio
    if(this.currentOperationText.innerText === "" && operation !== "C") {
      // Muda a operação
      if(this.previousOperationtext.innerText !== "") {
        this.changeOperation(operation)
      }
      return
    } 

    
    // Pegar o Valor atual e valor anterior
    let operationValue
    const previous = +this.previousOperationtext.innerText.split(" ")[0]
    const current = +this.currentOperationText.innerText
    // O + faz com q o valor ja se torne numero na var
    
    switch(operation) {
      case "+":
        operationValue = previous + current
        this.updateScreen(operationValue, operation, current, previous)
        break;
      case "-":
        operationValue = previous - current
        this.updateScreen(operationValue, operation, current, previous)
        break;
      case "/":
        operationValue = previous / current
        this.updateScreen(operationValue, operation, current, previous)
        break;
    case "*":
        operationValue = previous * current
        this.updateScreen(operationValue, operation, current, previous)
        break;
    case "%":
        operationValue = (previous * current/100)
        this.updateScreen(operationValue, operation, current, previous)
        break; 
    case "DEL":
        this.processDelOperation() 
        break;
    case "CE":
       this.processClearCurrentOperation()
        break;     
      
    case "C":
        this.processClearAllOperation()
        break;
      case "=":
        this.processEqualOperation()
      break;
    default:
        return;
    }

  }

    // Mudas os valores na tela da calculadora
    updateScreen(operationValue = null, operation = null, current = null, previous = null)
      {
       
      
        if(operationValue === null) {
          this.currentOperationText.innerText += this.currentOperation
        } else {
          // Checar se o valor é zero, se for, apenas adiciona o valor atual
          if (previous === 0) {
            operationValue = current
          }

          // Adicionar o valor atual para o anterior
          this.previousOperationtext.innerText = `${operationValue} ${operation}` 
          this.currentOperationText.innerText = ""
        }
    }


    // Muda a operação matemática
    changeOperation(operation) {

      const mathOperations = ["*", "/", "+", "-", "%"]

      if(!mathOperations.includes(operation)) {
        return
      }

      this.previousOperationtext.innerText = this.previousOperationtext.innerText.slice(0, -1) + operation
      //Ele irá retirar um valor, que no caso é a ope anterior e substituirá com a nova, no qual será a que o usuário escolher.
    }


    // Deleta o ultimo digito
    processDelOperation() {
      this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1)
    }

    // Limpa toda a operação atual
    processClearCurrentOperation() {
     this.currentOperationText.innerText = "" 
    }

    // Lipa toda as operações
    processClearAllOperation() {
       this.currentOperationText.innerText = ""
       this.previousOperationtext.innerText = ""
    }

    //
    processEqualOperation() {

      const operation = previousOperationtext.innerText.split(" ")[1]

      this.processOperation(operation)
    }
}





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