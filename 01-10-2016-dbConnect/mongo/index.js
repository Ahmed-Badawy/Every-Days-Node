// npm i -D mongodb

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
	if(err) console.log("Error has happend");

	var collection = db.collection('test');
	var doc1 = {'hello':'doc1'};
	var doc2 = {'hello':'doc2'};
	var lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];
	collection.insert(doc1);
	collection.insert(doc2, {w:1}, function(err, result) {});
	collection.insert(lotsOfDocs, {w:1}, function(err, result) {});

	collection.find().toArray(function(err, items){
		console.log(items);
	});

});


