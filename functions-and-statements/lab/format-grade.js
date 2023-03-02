function formatGrade(grade) {
    if (grade >= 5.50 && grade <= 6) {
        return `Excellent (${grade.toFixed(2)})`;
    } else if (grade >= 4.5 && grade < 5.5) {
        return `Very good (${grade.toFixed(2)})`
    } else if (grade >= 3.5 && grade < 4.5) {
        return `Good (${grade.toFixed(2)})`
    } else if (grade >= 3 && grade < 3.5) {
        return `Poor (${grade.toFixed(2)})`
    } else if (grade < 3) {
        return "Fail (2)"
    }
}


console.log(formatGrade(2.57));
console.log(formatGrade(3));
console.log(formatGrade(3.78));
console.log(formatGrade(4.69));
console.log(formatGrade(5.99));


