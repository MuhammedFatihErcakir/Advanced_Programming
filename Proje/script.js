function sin(){
    document.calculator.result.value=Math.sin(document.calculator.result.value)
}

function cos(){
    document.calculator.result.value=Math.cos(document.calculator.result.value)
}

function tan(){
    document.calculator.result.value=Math.tan(document.calculator.result.value)
}

function backSpace() {
    var a = document.calculator.result.value;
    document.calculator.result.value = a.substr(0,a.length-1);
}

function square() {
    document.calculator.result.value = Math.pow(document.calculator.result.value,2);
}

function sqrt() {
    document.calculator.result.value = Math.sqrt(document.calculator.result.value)
}

function fakt() {
    var faktorıyel = 1
    for (var i = 1; i<= document.calculator.result.value; i++){
        faktorıyel = faktorıyel * i;
    }
    
    document.calculator.result.value = faktorıyel;
}

function number(value) {
    document.calculator.result.value += value;
}

function remove() {
    document.calculator.result.value = " ";
}

function equal() {
    document.calculator.result.value = eval(document.calculator.result.value);
}

















