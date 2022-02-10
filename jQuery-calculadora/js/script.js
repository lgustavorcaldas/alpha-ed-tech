class Calculator{
    operand1;
    operand2;
    operation;
    result;

    setOperand1(_operand1){
        this.operand1 = _operand1;
    }
    setOperand2(_operand2){
        this.operand2 = _operand2;
    }
    setOperation(operation){
        this.operation = operation;
    }

    getResult(){
        switch (this.operation) {
            case '/':
                this.result = this.operand1 / this.operand2
                break;
            case '*':
                this.result = this.operand1 * this.operand2
                break;
            case '+':
                this.result = this.operand1 + this.operand2
                break;
            case '-':
                this.result = this.operand1 - this.operand2
                break;
        }
        return this.result
    }
    clearCalculator(){
        this.operation= "";
        this.operand1= 0;
        this.operand2= 0;
        this.result = 0;
        $("#result").val("");
    }
}

const calc = new Calculator();

const visor = $("#result");
let valor = "";

$(".btn").click(function(){
    valor += this.value
    visor.val(valor)
    console.log(valor);
});
$(".oper").click(function(){
    calc.setOperation(this.value);
    calc.setOperand1(parseFloat(visor.val()));
    $("#result").val("");
    valor = ""
});
$(".igual").click(function(){
    calc.setOperand2(parseFloat(visor.val()));
    const resultado = calc.getResult();
    visor.val(resultado);
});
$("#clear").click(function (){
    calc.clearCalculator();
    valor = "";
});