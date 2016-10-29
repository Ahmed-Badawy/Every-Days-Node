console.log("-----------Application Menu-----------");

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;




const Menu = electron.Menu;

app.on('ready',_=>{

	console.log("the app is ready");
	win = new BrowserWindow({
		height:600,
		width: 800,
	    resizeable: false, 	//can't resize it
	});	

	const product_name = electron.app.getName();
	const tempalte = [
		{
			label: "first menu col", //label is the name of the mneu
			submenu: [   //submenu is the submenu of this menu
				{
					label: `About ${product_name} (click & see the console)`,
					click: _=>{ console.log("Clicked") },           //click is invoked when clicked
					role: 'about'  //do somethings
				},
				{ label:"another one"},
				{type:'separator'},
				{label:"third one"},
				{ 
					label:"Quit", 
					click:_=>{app.quit()},
					accelerator: 'Q' 			//keyboard shortcut when the menu is opened
				}
			]
		},
		{
			label: "second menu col",
			submenu: [{
				label: `hahaha`
			}]
		}
	];
	const contextMenu = Menu.buildFromTemplate(tempalte);
	Menu.setApplicationMenu(contextMenu);

});

