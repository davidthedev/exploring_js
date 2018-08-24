// create a Promise, where it is either resolved or rejected
// in this case we will reject odd number and resolve even
const isNumberEven = new Promise(function(resolve, reject) {
  const number = Math.floor(Math.random() * 100);

  if (number % 2 === 0) {
    resolve(number);
  } else {
    reject(number);
  }
});

isNumberEven.then(function(number) {
  console.log(`Is even? Yes - ${number}`);
}).catch(function(number) {
  console.log(`Is even? No - ${number}`);
});
