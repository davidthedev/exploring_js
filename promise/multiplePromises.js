const doShopping = Promise.resolve('Shopping has been done');
const washCar = Promise.reject('Car wash was closed');
const moneySpent = '40 pounds';

// return an array of values if all promises are resolved
// if any promise fails enter the catch block

// we will enter the catch block here as washCar promise has been rejected
Promise.all([doShopping, washCar, moneySpent]).then(function(values) {
  console.log(values);
}).catch(function(msg) {
  console.log(msg);
});

// -----------------------------------------------------------------------------

const cleanHouse = Promise.resolve('House has been cleaned');
const postMail = Promise.resolve('Mail has been posted');
const timeSpent = 'Time spent: 1 hour';

// return an array of values if all promises are resolved
// if any promise fails enter the catch block

// we will enter the then block here as all promise have been resolved
Promise.all([cleanHouse, postMail, timeSpent]).then(function(values) {
  console.log(values);
}).catch(function(msg) {
  console.log(msg);
});
