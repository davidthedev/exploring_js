const number = 1;

number = 2; // will return an error as we cannot assign to constant variable

// "const" is the same as doing this:

/*
  Object.defineProperty(global, 'test', {
    value: 'hello',
    writable: false
  });

  global.test = 'hi';

  console.log(global.test);
*/
