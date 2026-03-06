//Sometimes the bind() method has to be used to prevent losing this.
//When a function is used as a callback, this is lost.

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function (city, country) {
    return (
      this.firstName +
      " " +
      this.lastName +
      "  City: " +
      city +
      "  Country: " +
      country
    );
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person.fullName.bind(member, "oslo", "Norway");
