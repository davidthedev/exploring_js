// an object representing the engine
const engine = function() {
  this.start = function(engineType) {
    return `${engineType} engine has started`;
  };
}

// an object representing the car
const car = function(make, model, year) {
  const partOne = this.start('V6');
  return `${partOne}. This is the sound of ${make} ${model} (${year}).`;
}

// we need to instantiate the engine object to pass it to the car object
// to allow access to its methods
const newEngine = new engine();

const arr = [ 'Mazda', 'Mazda6', '2013' ];

// instead of passing arguments one by one, we use apply to pass in the array
console.log(car.apply(newEngine, arr));
