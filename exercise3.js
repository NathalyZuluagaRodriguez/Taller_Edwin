function operation(number1, number2){
    if(number2 === 0){
        console.log("La división no se puede realizar por: " + number2);
    } else {
        let i = 0;
        let subtractions = number1;

        do {
            subtractions -= number2;
            i++;
        } while (subtractions >= number2);

        console.log("División: " + i + " y sobran " + subtractions);
    }
}


operation(12, 5);