const data = [
  { name: "width", value: 10 },
  { name: "height", value: 20 },
];

// Desired result: { width: 10, height: 20 }

const arrayDimension = (inputData) =>
  inputData.reduce(
    (result, item) => ({ ...result, [item.name]: item.value }),
    {}
  );

console.log(arrayDimension(data));