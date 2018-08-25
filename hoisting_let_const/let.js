let x = 'I am outside';

const func = function() {
  this.run = function() {
    console.log(x);

    if (x) {
      ley y = 'I am inside';
    }

    // let is block level hence it is not accessible outside of the "if" block and
    // we will get "undefined"
    console.log(y);
  }
}

const newFunc = new func();
newFunc.run();
