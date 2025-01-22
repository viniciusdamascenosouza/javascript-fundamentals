const students = ["Jhon", "Julian", "Caio", "Ana"];
const averages = [10, 8, 7.5, 9];

const list = [students, averages];

function screenStudentsAndGrade(student) {
  if (list[0].includes(student)) {
    const [students, averages] = list;
    const index = students.indexOf(student);
    const averageStudent = averages[index];
    console.log(`${student} has an average of ${averageStudent} points.`);
  } else {
    console.log("student not on the registration list");
  }
}

screenStudentsAndGrade("Jhon"); // Jhon has an average of 10 points.
screenStudentsAndGrade("Raven"); // student not on the registration list
