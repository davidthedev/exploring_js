var x = 1;

const hoisting = function() {
  // [1] : var x;

  console.log(x);

  // "var" essentially gets initialised (but not set) here -> [1]
  // and then it gets set here -> [2]
  // therefore when we console.log() it, we get "undefined"

  // [2] : x = 1
  var x = 1;
}

hoisting();
