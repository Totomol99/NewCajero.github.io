let Usuario = localStorage.getItem("usuario");
let Saldo = localStorage.getItem("saldo");
document.getElementById('nuevo').value = Saldo;
let SUMA = '';
let displayValue = ''; 

function appendToDisplay(value){
    displayValue += value; 
    document.getElementById('display').value = displayValue; 
    
}

function clearDisplay(){
    displayValue = ''; 
    document.getElementById('display').value = displayValue;
}

function calculate(){ 
    try{
        Saldo = Number(Saldo)+ Number(displayValue);
        console.log(Saldo);

        document.getElementById('nuevosaldo').value = Saldo;
       displayValue = ''; 
       document.getElementById('display').value = displayValue;

        console.log(Usuario);
        console.log(Saldo);

        
    } catch(error){
        document.getElementById('display').value = "Error";
    }
}