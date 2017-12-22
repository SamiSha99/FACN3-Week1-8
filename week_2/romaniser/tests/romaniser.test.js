var test = require('tape');
var romaniser = require('../romaniser.js');

test('Check tape is working', function(t){
var actual = 1 + 1;
var expected = 2;
t.equal(actual, expected, 'One plus one should equal two');
t.end();
});

test('Romaniser output', function(t){
var actual = romaniser(1);
var expected = 'I';
t.equal(actual, expected, 'romaniser(1) should return I');
t.end();

});

test('Romaniser output', function(t){
var actual = romaniser(2);
var expected = 'II';
t.equal(actual, expected,'romaniser(2) should return II');
t.end();


});

test('Romaniser output', function(t){
var actual = romaniser(3);
var expected = 'III';
t.equal(actual, expected,'romaniser(3) should return III');
t.end();


});

test('Romaniser output', function(t){
var actual = romaniser(4);
var expected = 'IV';
t.equal(actual, expected,'romaniser(4) should return IV');
t.end();


});

test('Romaniser output', function(t){
var actual = romaniser(5);
var expected = 'V';
t.equal(actual, expected,'romaniser(5) should return V');
t.end();


});

test('Romaniser output', function(t){
var actual = romaniser(6);
var expected = 'VI';
t.equal(actual, expected,'romaniser(6) should return VI');
t.end();


});
