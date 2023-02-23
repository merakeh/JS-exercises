function solve(day, age){
    if (age < 0 || age > 122){
        console.log("Error!");
        return;
    }

    let finalPrice;
    if (day === "Weekday"){
        if (0 <= age && age <= 18){
            finalPrice = 12;
        } else if (18 < age && age <= 64){
            finalPrice = 18;
        } else if (64 < age && age <= 122){
            finalPrice = 12;
        }
    } else if (day === "Weekend"){
        if (0 <= age && age <= 18){
            finalPrice = 15;
        } else if (18 < age && age <= 64){
            finalPrice = 20;
        } else if (64 < age && age <= 122){
            finalPrice = 15;
        }
    } else if (day === "Holiday"){
        if (0 <= age && age <= 18){
            finalPrice = 5;
        } else if (18 < age && age <= 64){
            finalPrice = 12;
        } else if (64 < age && age <= 122){
            finalPrice = 10;
        }
    }

    console.log(`${finalPrice}$`)

}

solve("Holiday", 15);