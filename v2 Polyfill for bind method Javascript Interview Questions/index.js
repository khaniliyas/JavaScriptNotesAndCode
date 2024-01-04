let obj = {
  firstName: "Iliyas",
  lastName: "Khan",
};

let printMyName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + hometown + " " + state
  );
};

let print1 = printMyName.bind(obj, "Kathora Bazar");
print1("Maharashtra");
Function.prototype.myPrintNameMethod = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};
let print2 = printMyName.myPrintNameMethod(obj, "Kathora Bazar");
print2("Maharashtra");
