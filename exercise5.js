function factorial(number) {
    
    let factorial = 1;
    let i = number;

    
    do {
        factorial *= i;
        i--;
    } while (i > 0);

    console.log("La factorial de "+ number + " es: "+ factorial); 
}

factorial(5)


