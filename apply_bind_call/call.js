// an object containing some properies of a bird
const bird = {
  canFly: 'of course',
  getFamily: function(bird) {
    switch (bird) {
      case 'seagull':
        return 'laridae';
      case 'dove':
        return 'columbidae';
      case 'owl':
        return 'strigiformes'
      default:
        return 'unknown ' + bird;
    }
  }
};

// a function object that will have access to the bird object
const seagull = function(name) {
  const bird = 'seagull';
  const family = this.getFamily(bird);
  const partOne = `${name} is a ${bird} and is from the family of ${family}.`;
  const partTwo = `Can ${name} fly? ${this.canFly.charAt(0).toUpperCase()}${this.canFly.substr(1)}!`;

  return `${partOne}\n${partTwo}`;
}

// by using the call method here we allow seagull function object access to the bird object
// we also pass in 'Charlie' as an argument to the seagull function object
console.log(seagull.call(bird, 'Charlie'));
