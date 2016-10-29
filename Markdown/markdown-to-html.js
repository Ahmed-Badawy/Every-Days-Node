var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true, //Enable GitHub flavored markdown.
  tables: true, //Enable GFM tables. This option requires the gfm option to be true.
  breaks: false, //Enable GFM line breaks. This option requires the gfm option to be true.
  pedantic: false, //Conform to obscure parts of markdown.pl as much as possible. Don't fix any of the original markdown bugs or poor behavior.
  sanitize: true, //Sanitize the output. Ignore any HTML that has been input.
  smartLists: true, //Use smarter list behavior than the original markdown. May eventually be default with the old behavior moved into pedantic.
  smartypants: false //Use "smart" typograhic punctuation for things like quotes and dashes.
});
 
console.log(marked(`
I am using __markdown__.
# Hello world
### mar it down man

--- 
		damn you monika
	`));