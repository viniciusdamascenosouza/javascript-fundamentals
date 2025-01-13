// GLOBAL SCOPE
// Any variable that is in global scope can be accessed by other parts of the program. A variable is considered global when it is not declared within any function or block.
const student = "Vinícius"

if (1 > 0) {
    console.log("student", student)
}

console.log("student", student)

// BLOCK SCOPE
// Variables declared inside braces { }, as in the case of if, for, while, etc., are not accessible to outside code. We call the code inside { } a block.
if (1 > 0) {
    let name = 'Ana';
    console.log(name); 
  }
  
  // variable `name` is not acessible
  console.log(name); // Error: name is not defined

//   FUNCTION SCOPE (local)
// Variables declared within a function are considered “local” (i.e., the opposite of “global”) and cannot be accessed by code outside the function block.
function greet() {
    const name = 'Vinícius'; // local variable
    const greet = 'Hello'; // local variable
    console.log(`${greet}, ${name}!`); // Hello, Vinícius!”
  }
  
  // Variables cannot be accessed from outside the function
  console.log(`${greet}, ${name}!`); // It will give a “not defined” error in the console