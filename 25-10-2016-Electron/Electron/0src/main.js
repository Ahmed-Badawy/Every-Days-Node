const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const countDown = require('./imports/countDown');
const ipc = electron.ipcMain;

var all_windows = [];


//you can set the project name from the package json property :::   "productName": "My Project Man",

app.on('ready',_=>{
	console.log("the app is ready");
	for(let i=0;i<3;i++){
		win = new BrowserWindow({
			height:600,
			width: 800
		});

//this will open the dev tools
  		win.openDevTools();

//how to load an html file
		win.loadURL(`file://${__dirname}/countDown.html`);

		// countDown();

//on close empty the object for better use of ram
		win.on('closed',_=>{ console.log('closed'); win = null; });

		all_windows.push(win);
	}
})

//catch an event from the renderer ipc
ipc.on('countdown-start',_=>{ //on countdown-start event catche
	console.log("cought the event");
	countDown(count=>{
		console.log("main.js",count);
		all_windows.forEach(win=>{
			win.webContents.send('countdown_to_renderer',count);
		})
	});
})




