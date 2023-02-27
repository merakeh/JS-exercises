function solve(group, typeGroup, dayOfWeek) {
    let totalPrice = 0;
    let singlePrice = 0;

    if (typeGroup === "Students") {
        if (dayOfWeek === "Friday") {
            singlePrice = 8.45;
        } else if (dayOfWeek === "Saturday") {
            singlePrice = 9.80;
        } else if (dayOfWeek === "Sunday") {
            singlePrice = 10.46;
        }
    } else if (typeGroup === "Business") {
        if (dayOfWeek === "Friday") {
            singlePrice = 10.90;
        } else if (dayOfWeek === "Saturday") {
            singlePrice = 15.60;
        } else if (dayOfWeek === "Sunday") {
            singlePrice = 16;
        }
    } else if (typeGroup === "Regular") {
        if (dayOfWeek === "Friday") {
            singlePrice = 15;
        } else if (dayOfWeek === "Saturday") {
            singlePrice = 20;
        } else if (dayOfWeek === "Sunday") {
            singlePrice = 22.50;
        }
    }

    totalPrice = group * singlePrice;

    if (typeGroup === "Students" && group >= 30) {
        totalPrice = totalPrice * 0.85;
    }

    if (typeGroup === "Business" && group >= 100) {
        totalPrice = totalPrice - (10 * singlePrice);
    }

    if (typeGroup === "Regular") {
        if (group >= 10 && group <= 20) {
            totalPrice = totalPrice * 0.95;
        }
    }


    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");