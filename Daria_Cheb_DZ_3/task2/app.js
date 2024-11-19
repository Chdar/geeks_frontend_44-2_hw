let grades = [5, 5, 3, 4, 2, 1, 3];
let usaGrades = [];

for (let grade of grades) {
    let usaGrade;

    switch (grade) {
        case 5:
            usaGrade = 'A';
            break;
        case 4:
            usaGrade = 'B';
            break;
        case 3:
            usaGrade = 'C';
            break;
        case 2:
            usaGrade = 'D';
            break;
        case 1:
            usaGrade = 'E';
            break;
        default:
            usaGrade = 'Invalid grade';
    }

    usaGrades.push(usaGrade);
}

console.log(americanGrades.join(', '));
