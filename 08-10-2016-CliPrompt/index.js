// npm install --save cli-prompt

var prompt = require('cli-prompt');


// prompt(message, onValue, [onError])
// message: text prompt for the user
// onValue: function to be called (after user hits enter/return) with the entered text
// onError: optional function to receive an error, if STDIN has already ended, for example.



// prompt('enter your first name: ', function (val) {
//   var first = val;
//   prompt('and your last name: ', function (val) {
//     console.log('hi, ' + first + ' ' + val + '!');
//   }, function (err) {
//     console.error('unable to read last name: ' + err);
//   });
// }, function (err) {
//   console.error('unable to read first name: ' + err);
// });


//multiple requests
prompt.multi([
  {
    key: 'username',
    default: 'john_doe'
  },
  {
    label: 'password (must be at least 5 characters)',
    key: 'password',
    type: 'password',
    validate: function (val) {
      if (val.length < 5) throw new Error('password must be at least 5 characters long');
    }
  },
  {
    label: 'number of pets',
    key: 'pets',
    type: 'number',
    default: function () {
      return this.password.length;
    }
  },
  {
    label: 'is this ok?',
    type: 'boolean'
  }
], val=>console.log(val) , console.error);





