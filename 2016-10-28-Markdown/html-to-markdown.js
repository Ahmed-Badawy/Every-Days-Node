var toMarkdown = require('to-markdown');



console.log(
	toMarkdown(`
		<h1>Hello world!</h1>
		<ul>
			<li>hello</li>
			<li>hello2</li>
			<li>hello3</li>
			</ul>
			<hr>
	`)
);