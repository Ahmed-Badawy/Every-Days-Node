console.log("-----------Git Status-----------");

const electron = require('electron');

// const app = electron.app;
const {app, BrowserWindow} = electron; // this is the same as the three above
const path = require('path');


app.on('ready',_=>{
	console.log("the app is ready");

	win = new BrowserWindow({
		height:180,
		width: 500
	});	

  win.loadURL(`file://${__dirname}/status.html`);
  win.on('close',_=>{win=null});

});

