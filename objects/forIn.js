const student = {
    name: "Vinícius",
    age: 22,
    cpf: "12312312312",
    class: "Javascript",
    telephones: [919999999, 929999999],
    average: 7.5,
    isApproved: function(myAverage) {
        return this.average <= myAverage ? true : false;
    },
  };

  for (let key in student) {
    const type = typeof student[key];
    if(type !== "object" && type !== "function") {
        const text = `the key ${key} has a value ${student[key]}`;
        console.log(text);

    }
  }
