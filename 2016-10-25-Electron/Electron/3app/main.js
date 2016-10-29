console.log("-----------ClipBoard Buffer-----------");

const electron = require('electron');


const {app, Menu, Tray, BrowserWindow, clipboard, globalShortcut} = electron;
const path = require('path');


app.on('ready',_=>{

	console.log("the app is ready");
	win = new BrowserWindow({
		height:600,
		width: 800
	});	

	const myTray = new Tray(path.join('3app','Trayicon.png'));

	let contextMenu = Menu.buildFromTemplate([
		{label: "<Empty>", enabled:false },
		{label: "item2", click:_=>{console.log("clickd")} },
		{label: "item3"}
	]);
	myTray.setContextMenu(contextMenu);

	let stack = [];
	checkClipboardForChange(clipboard, text=>{
		stack = addToStack(text,stack);
		console.log(stack);
		myTray.setContextMenu( Menu.buildFromTemplate( formatMenuTemplateForStack(clipboard, stack) ));
		registerShortcuts(globalShortcut, clipboard, stack);
	});

});


function checkClipboardForChange( clipboard, onChange ){
	let cache = clipboard.readText();
	let latest; 
	setInterval(_=>{
		latest = clipboard.readText()
		if(latest!=cache){
			cache = latest; 
			onChange(cache);
		}
	},1000)
}

const ITEM_MAX_LENGTH = 20;
function formatItem(item){
	return item && item.length >ITEM_MAX_LENGTH ? item.substr(0,ITEM_MAX_LENGTH)+'...' : item;
}

//this will generate template on clipboard changes:-
function formatMenuTemplateForStack(clipboard, stack){
	return stack.map( (item, i)=>{
		return {
			label: `Copy ${formatItem(item)}`,
			click: _=> clipboard.writeText(item),
			accelerator: `Alt+${i+1}`
		}
	});
}

const STACK_SIZE = 5;
function addToStack(item, stack){
	// console.log("stack",stack);
	// console.log("item",item);
	if(item && (stack.indexOf(item)!=-1) ) return stack;
	return [item].concat( (stack.length>=STACK_SIZE) ? stack.slice(0, stack.length-1) : stack );
}

//this will register shortcuts for the tray items:-
function registerShortcuts(globalShortcut, clipboard, stack){
	globalShortcut.unregisterAll();
	for(let i=0; i<STACK_SIZE; i++){
		globalShortcut.register(`Alt+${i+1}`,_=>{
			clipboard.writeText(stack[i]);
		});
	}
}



app.on('will-quit',_=>{
	globalShortcut.unregisterAll();
})


let ar = ["one","two","three","four","five","six","seven"];
