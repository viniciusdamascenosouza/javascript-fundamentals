const students = ["Harry", "Hermione", "Ron"];
const averages = [90, 95, 85];

const studentsAndAverages = [students, averages];

console.log(studentsAndAverages);

// Harry results:
console.log(
  `The average of ${studentsAndAverages[0][0]} is ${studentsAndAverages[1][0]} points.`
);

// Hermione results:
console.log(
  `The average of ${studentsAndAverages[0][1]} is ${studentsAndAverages[1][1]} points.`
);

// Ron results:
console.log(
  `The average of ${studentsAndAverages[0][2]} is ${studentsAndAverages[1][2]} points.`
);
