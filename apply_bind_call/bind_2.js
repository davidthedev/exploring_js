const generator = {
  getData(callback) {
    callback();
  },
  process() {
    console.log('processing');
  },
  render() {
    this.getData(function() {
      this.process();
    }.bind(this)); // bind to scope of render()
  }
}

generator.render();
