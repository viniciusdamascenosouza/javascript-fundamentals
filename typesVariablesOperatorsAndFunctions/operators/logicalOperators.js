const finalNote = 7;
const fouls = 3;

function exampleOne() {
  if (finalNote < 7 || fouls > 4) {
    console.log("Unapproved");
  } else {
    console.log("Approved");
  }
};

function exampleTwo() {
  if (finalNote >= 7 && fouls > 4) {
    console.log(
      `Approved! Your final note is ${finalNote} and you have ${fouls} fouls.`
    );
  } else {
    console.log(
      `Unapproved! Your final note is ${finalNote} and you have ${fouls} fouls.`
    );
  }
};

exampleOne();
exampleTwo();
