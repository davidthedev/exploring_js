const app = {
  req: {
    method: 'GET'
  },
  res: {
    send: function(text) {
      console.log(text);
    }
  },
  get: function(route, cb) {
    console.log(route);
    // we pass request and response objects to the callback function
    cb(this.req, this.res);
  }
}

// we pass the route and a callback function (ES6 arrow function)
app.get('/route', (req, res) => {
  res.send('Request received');
});
