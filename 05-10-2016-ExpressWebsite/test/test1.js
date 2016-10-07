// var app = require('./../index.js');
var should = require('should'),
	supertest = require('supertest');


describe('myTest',function(){
	it('should pass',function(done){
		done();
	});
	it('should not pass',function(done){
		throw "don't pass";
		done();
	});
})














