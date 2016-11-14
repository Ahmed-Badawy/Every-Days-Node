var generators = require('yeoman-generator');
var _ = require('lodash');
var chalk = require('chalk'); //color the cmd output
var yosay = require('yosay'); //draw the yeoman drawing


module.exports = generators.Base.extend({
	constructor: function(){
	    generators.Base.apply(this, arguments);

    /*********************************************************************
    	this is how to require arguments
    **********************************************************************/
	    // This makes `appname` a required argument:
		this.argument('appname',{type:String, required:true});
		this.appname = _.kebabCase(this.appname);
		console.log("appname is: "+this.appname);

	/*********************************************************************
		this is how to support options
	**********************************************************************/
	    // This method adds support for a `--coffee` flag
	    // this.option('coffee');
	    //or you can define (option) params ex:
	    this.option('coffee',{
	    	desc:"option desc here",
	    	type:Boolean,
	    	default: false
	    });
	    // And you can then access it later on this way; e.g.
	    console.log("option coffie is: ",this.options.coffee);

//you can see description with of things with: $ yo one -h
	},


	method1: function(){ this.log('Hello world') },
	foo: function(){ this.log('Hello FOO') },
	bar: function(){ this.log('Hello BAR') },

//private methods begin with _ & doesn't get excuted on the run
	_private: function(){ this.log("Hello Private") },
	test_private: function(){ this._private() },


// Yeoman special methods
	initializing: function(){ this.log('----initializing') },
	// prompting: function(){ this.log('----prompting') },
	// you can divide special methods to a group of methods like this:-
		prompting: {
			yosay: _=>console.log(yosay(`Welcome, this is the yeoman guy
${chalk.yellow('Ahmed Badawy')} - ${chalk.red('http://ahmed-badawy.com')}`)),
			method1: function(){ this.log('----prompting') },
			prompt1: function(){ console.log("prompt 1") },
			prompt2: function(){ console.log("prompt 2") },
			real_prompting: function () {
			    return this.prompt([{
			      type    : 'input',
			      name    : 'name',
			      message : 'Your project name',
			      default : this.appname // Default to current folder name
			    }, {
			      type    : 'input',
			      name    : 'age',
			      message : 'Your age',
			      default : 22,
			      store   : true //this stores the last answer to this question & prompt it next time u run the generator
			    }, {
			      type    : 'confirm',
			      name    : 'cool',
			      message : 'Would you like to enable the Cool feature?',
			    }, {//multi choices
			    	type: 'checkbox',
			    	name: 'jslibs',
			    	message: 'Which libs would u like to include ?',
			    	choices:[
			    		{name: 'lodash', value:'lodash', checked: true},
			    		{name: 'jquery', value:'jquery', checked: true},
			    		{name: 'momentJS', value:'momentJS', checked: true},
			    	]
			    }
			    ]).then(function (answers) {
			      this.log('app name: ', answers.name);
			      this.log('cool feature: ', answers.cool);
			      this.log('our Libs: ', answers.jslibs);
			    }.bind(this));
			},	
		},

	configuring: function(){ this.log('----configuring') },
	default: function(){ this.log('----default') },
	writing: function(){ this.log('----writing') },
	//conflicts showes you files in conflict. if there is a conflict ? (ynaxdh) just choose h to help
		conflicts: function(){ this.log('----conflicts') },
	install: function(){
		this.log('----install'); 
		// this.npmInstall();
		// this.bowerInstall();
		this.installDependencies({ //optional to check the --skip-install flag in your code
			skipInstall: this.options['skip-install'] || false
		});//install both npm & bower
	},
	end: function(){ this.log('----end') },




//Destination context: location where app is scaffolded
//Template context: location where templates are stored
	writing: {
		appStaticFiles: function(){
			//you can either do it like this:-
	/*			let template = this.templatePath('_Mario.ico');
				let destination = this.destinationPath('src/Mario.ico');
				this.copy(template,destination);*/
			//or like this:-
				this.copy('_Mario.ico','src/Mario.ico');
				this.directory('css','src/css');
/*there is a convension of naming the files, 
normal files before are renamed like _filename & remove the _ in the result
.name files like (.git,.htaccess) should named normal & add the . in the result*/				
		},
		html:function(){ //copy file with variables
			let vars = {appname: this.appname, ngapp: this.appname };
			this.fs.copyTpl(this.templatePath('index.html'), this.destinationPath('src/index.html'), vars);
		},
		json:function(){ //create json file from a js obj
			let js_obj = {name:"one",age:22}
			this.fs.writeJSON('file.json',js_obj);
		},
		composeit:function(){//this compose your generator with another generator
			this.composeWith('common',{
				//wanted (generator-common) options
			});
		}
	}


})