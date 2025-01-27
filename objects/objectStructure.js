const student = {
  name: "Vinícius",
  age: 22,
  cpf: "12312312312",
  class: "Javascript",
};

console.log(student.name); // Vinícius;
console.log(student.age); // 22;
console.log(student.cpf); // 12312312312;
console.log(student.class); // Javascript;

console.log(
  `The student ${student.name} is ${student.age} years old and is in the ${student.class} class.`
); // The student Vinícius is 22 years old and is in the Javascript class.

function showStudent(objectStudent, infoStudent) {
  return objectStudent[infoStudent];
}

console.log(student['name']); // Vinícius
console.log(student['cpf']); // 12312312312

console.log(showStudent(student, "name")); // Vinícius
console.log(showStudent(student, "cpf")); // 12312312312
