console.log("-----------Tray Icon-----------");

const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;


// const Menu = electron.Menu;
// const Tray = electron.Tray;
// const app = electron.app;
const {app, Menu, Tray} = electron; // this is the same as the three above
const path = require('path');
let myTray = null;


app.on('ready',_=>{
	console.log("the app is ready");

	win = new BrowserWindow({
		height:600,
		width: 800
	});	

myTray = new Tray('./2app/Trayicon.png');

const contextMenu = Menu.buildFromTemplate([
    {label: 'Item1', type: 'radio'},                  //type: radio : would be a radio buttons
    {label: 'Item2', type: 'radio', enabled: false},  //this is not enabled
    {label: 'Item3', type: 'radio', checked: true},   //this is the default checked
    {label: 'Item4', type: 'radio'}
  ]);
  myTray.setToolTip('This is my application.');  
  myTray.setContextMenu(contextMenu);

});

