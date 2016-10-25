console.log("script ready");

const electron = require('electron');
const path = require('path');
const fs = require('fs');


const {ipcRenderer: ipc, desktopCapturer, screen} = electron; 
 

function getMainSource(desktopCapturer, screen, done){
	const options = { types:['screen'], thumbnailSize: screen.getPrimaryDisplay().workAreaSize };
	desktopCapturer.getSources(options, (err,sources)=>{
		if(err) return console.log("Cannot Capture Screen: ", err);
		const isMainSource = source=>source.name == "Entire screen" || source.name == 'Screen 1';
		done( sources.filter(isMainSource)[0] );
	})
}


function onCapture(evt, targetDir){
	console.log("capture");
	getMainSource(desktopCapturer, screen, source=>{
		const png = source.thumbnail.toPng();
		const filePath = path.join(targetDir, new Date().getTime()+'.png' );

		writeScreenshoot(png, filePath);
	})
}

function writeScreenshoot(png,filePath){
	console.log("file path: ",filePath);
	fs.writeFile(filePath, png, err=>{
		if(err) return console.log("Failed to write screen: ",err);
	})
}


ipc.on('capture',onCapture);


