const obj1 = {
  prop1: "test",
};

const obj2 = {
  "a-b": "test",
};

console.log(obj1.prop1); // test
console.log(obj1["prop1"]); // test
console.log(obj2["a-b"]); // test

// console.log(obj2[a - b]); // error
