function message(number1, number2){

        if(isNaN(number1)){
            console.log("Para el primer numero ingresado. Por favor ingrese un caracter numerico")
        } 
        if(isNaN(number2)){
            console.log("Para el segundo numero ingresado. Por favor ingrese un caracter numerico")
        }
    function operation(){}

     let addition = (number1 + number2)
     let subtracion = (number1 - number2)
     let multiplication = (number1 * number2)
     let division = (number1/number2).toFixed(2)      

     console.log ("Suma: " + addition)
     console.log ("Resta: " + subtracion)
     console.log ("Multiplicacion: " + multiplication)
 
     if(number2 == 0){
         console.log ("La division no se puede realizar por:"+ number2 )
     }else{
         console.log ("Division: " +  division)
     }
     return 
    }
   

message(2,4)
