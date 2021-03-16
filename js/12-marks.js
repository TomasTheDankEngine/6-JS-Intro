function marksAvg (name, marks) {
    //console.log(name);
    //console.log(marks);
    let sum = 0;
    for (let i=1; i<marks.length; i++) {
        sum += marks[i];
    }
    const avg = sum / marks.length;
    console.log(`${name} mark average is ${avg}`);
}

marksAvg('jej', [1, 5, 8, 7, 8, 8, 9, 2]);

const school = [
    ['John', 5, 8, 9, 7, 5],
    ['Jill', 6, 9, 3, 10, 10],
    ['Forrest', 7, 8, 4, 2, 1],
    ['Gigi', 3, 3, 10, 10, 9]
];

for (let i=0; i<school.length; i++) {
    console.log('---------------');
    const student = school[i];
    const name = school[0]
    const marks = school[1]
    
    marksAvg(name, marks)
}