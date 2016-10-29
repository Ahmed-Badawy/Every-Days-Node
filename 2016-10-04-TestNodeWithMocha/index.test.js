// add this to package.json :        "test": "mocha ./testing --recursive -w"          & run it like:   npm test
// or you can just add node_modules/.bin  to your environoment_paths       & run it like:  mocha index.test --recursive -w


var expect = require('chai').expect;

var our_code = require('./index');


describe('main-test',function(){

	it("should work",function(){ expect(true).to.be.true; });
	it("Add test",function(){ expect(4+5).equal(9); });
	it("Object test",function(){ 
		var obj = {item1: "hello"}
        expect(obj).to.have.a.property("item1", "hello");
	});

	it("our_code test fn1",function(){ 
		var item = 'hello';
		expect( our_code.fn1(item) ).to.equal(item);
	});
	it("our_code test fn2",function(){ 
		expect( our_code.fn2() ).to.equal(44);
	});

	// it("all method works",function(){ expect(nums.all).to.include("one") });

	// it("random method works",function(){ 
	// 	var random_item = nums.random();
	// 	expect(nums.all).to.include(random_item); 
	// });

	// describe('Nums',function(){
	// 	it('should have an array of strings',function(){
	// 		// expect(nums.all).to.not.satisfy(isArrayOfStrings);
	// 		expect(nums.all).to.satisfy(isArrayOfStrings);
	// 		function isArrayOfStrings(array){
	// 			return array.every( item=>typeof item === 'string' )
	// 		}
	// 	})
	// });

});