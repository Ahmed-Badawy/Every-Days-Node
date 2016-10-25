console.log("-----------Screen Shoots-----------");

const electron = require('electron');

const {app, BrowserWindow, globalShortcut} = electron; 
const path = require('path');
let win = {};


app.on('ready',_=>{
	console.log("the app is ready");

	win = new BrowserWindow({
		height:800,
		width: 800,
    resizeable: false,
    frame:false //there is no frame
	});	

  win.openDevTools();


  win.loadURL(`file://${__dirname}/capture.html`);

  win.on('close',_=>{win=null});


  globalShortcut.register('Alt+D', _=>{
    console.log("got shortcut");
    // win.webContents.send('capture', app.getPath('Pictures'));
    win.webContents.send('capture', __dirname+"/Pictures" );
  })




});

