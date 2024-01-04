let obj = {
  firstName: "Iliyas",
  lastName: "Khan",
};
let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + hometown + " " + state
  );
};
printFullName.call(obj, "Kathora Bazar", "Maharashtra");
let obj2 = {
  firstName: "Akshay",
  lastName: "Saini",
};
//function borrowing
printFullName.apply(obj2, ["Dehradun", "Uttarakhand"]);

let printMyName = printFullName.bind(obj, "Kathora Bazar", "Maharashtra");
console.log(printFullName);
printMyName();
