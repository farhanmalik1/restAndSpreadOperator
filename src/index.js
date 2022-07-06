// Array Filter
// Rest and Spread Operator

// Rest Operator (for objects)

let colors = ["Red", "Green", "Blue"];

let secondaryColors = [...colors, "White", "Yellow"];

console.log(secondaryColors);

// Spread Operator (for functions parameter)

const filter = (...args) => {
  return args.filter((x) => x === 4);
};
console.log(filter(2, 3, 4));
