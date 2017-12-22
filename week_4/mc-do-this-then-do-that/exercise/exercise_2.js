// example
var asyncAdd = function(x, y, cb) {
  setTimeout(() => {
    // no error in this example,
    // you will need to add an error case for the example below
    cb(null, x + y)
  }, 200)
}

var asyncDivide = function(x, y, cb) {
  setTimeout(() => {
    // TODO: divide the numbers and handle the case where y is zero (see the tests)
    if(y === 0){
      cb({
        isError: true,
        message: 'cannot divide by zero'
      });
    } else {

    cb( null, x / y); // this callback needs arguments
  }
  }, 200)
}

var asyncDivideByThenAdd = function(x, y, z, cb) {
  setTimeout(() => {
    asyncDivide(x, y, (error, division) => {

      if(error){
        cb(error)
        return
      }
      cb( null, division + z)
    })
  }, 200)
}

module.exports = {
  asyncDivide: asyncDivide,
  asyncDivideByThenAdd: asyncDivideByThenAdd
}
