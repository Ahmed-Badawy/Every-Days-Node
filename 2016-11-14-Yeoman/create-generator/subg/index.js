var generators = require('yeoman-generator');
var _ = require('lodash');
var chalk = require('chalk'); //color the cmd output

// call this with the $ yo one:subg sub-name

module.exports = generators.Base.extend({
	constructor: function(){
		//adding arguments:-
	    generators.Base.apply(this, arguments);
		this.argument('subname',{type:String, required:true});
	    console.log("inside subg sub-generator", this.subname);
	    
	    //adding options or flags
	   	this.option('coffee',{
	    	desc:"option desc here",
	    	type:Boolean,
	    	default: false
	    });
	    console.log("option coffie is: ",this.options.coffee);

	},

	writing:{
		method1:function(){
			this.log("hello method1 in subg generator");
			this.directory('subfolder','src/subfolder');
		},
		html:function(){ //copy file with variables
			let vars = {appname: this.subname, ngapp: this.subname };
			this.fs.copyTpl(this.templatePath('index-sub.html'), this.destinationPath('src/index-sub.html'), vars);
		},
		json:function(){ //create json file from a js obj
			let js_obj = {name:"one",age:22}
			this.fs.writeJSON('file-from-sub.json',js_obj);
		}
	}

})