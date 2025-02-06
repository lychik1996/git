console.log(1);

await new Promise((resolve) => {
  console.log(2);
  resolve();
})
  .then(() => {
    setTimeout(() => {
      console.log(3);
    }, 500);
  })
  .then(() => {
    console.log(4);
  })
  .then(() => {
    setTimeout(() => {
      console.log(5);
    }, 500);
  })
  .then(() => {
    console.log(6);
  });
console.log(7);

1, 2, 7, 3, 4, 5, 6;
