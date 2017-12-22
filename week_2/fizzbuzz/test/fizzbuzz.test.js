var test = require('tape');

var fizzbuzz = require('../fizzbuzz.js')


test('Testing fizzbuzz function', function(t){
var actual = fizzbuzz(1);
var expected = 1;


t.equal(actual, expected, 'Expected fizzbuzz(1) = 1');
t.end();
});

test('Testing fizzbuzz function', function(t){
var actual = fizzbuzz(3);
var expected = 'fizz';


t.equal(actual, expected, 'Expected fizzbuzz(3) = fizz');
t.end();
});

test('Testing fizzbuzz function', function(t){
var actual = fizzbuzz(5);
var expected = 'buzz';


t.equal(actual, expected, 'Expected fizzbuzz(5) = buzz');
t.end();
});

test('Testing fizzbuzz function', function(t){
var actual = fizzbuzz(15);
var expected = 'fizzbuzz';


t.equal(actual, expected, 'Expected fizzbuzz(15) = fizzbuzz');
t.end();
});


test('Testing fizzbuzz function', function(t){
var actual = fizzbuzz(18);
var expected = 'fizz';


t.equal(actual, expected, 'Expected fizzbuzz(18) = fizz');
t.end();
});

test('Testing fizzbuzz function', function(t){
var actual = fizzbuzz(225);
var expected = 'fizzbuzz';


t.equal(actual, expected, 'Expected fizzbuzz(225) = fizzbuzz');
t.end();
});

test('Testing fizzbuzz function', function(t){
var actual = fizzbuzz(25);
var expected = 'buzz';


t.equal(actual, expected, 'Expected fizzbuzz(25) = fizzbuzz');
t.end();
});


test('Testing fizzbuzz function', function(t){
var actual = fizzbuzz(32894);
var expected = 32894;


t.equal(actual, expected, 'Expected fizzbuzz(32894) = 32894');
t.end();
});
