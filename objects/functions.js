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

  console.log(student.isApproved(6.5));