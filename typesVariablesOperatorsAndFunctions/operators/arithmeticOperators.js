const firstBimonthlyGrade = 8.5;
const secondBimonthlyGrade = 9;
const thirdBimonthlyGrade = 8;
const fourthBimonthlyGrade = 6.5;

const grades = [
  firstBimonthlyGrade,
  secondBimonthlyGrade,
  thirdBimonthlyGrade,
  fourthBimonthlyGrade,
];

const total = grades.reduce((sum, grade) => sum + grade, 0);

const average = total / grades.length;

console.log(total); // 32
console.log(average); // 8

function resultMessage(average, total) {
  if (average >= 7.5) {
    console.log(
      `Your average is ${average}. You are approved. Your total is ${total} out of 40 points.`
    );
  } else {
    console.log(
      `Your average is ${average}. You are disapproved and need to study more. Your total is ${total} out of 40 points.`
    );
  }
}

resultMessage(average, total); // Your average is 7.25. You are disapproved and need to study more. Your total is 29.
