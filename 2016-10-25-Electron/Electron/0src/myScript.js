console.log("it's loaded");

const electron = require('electron');
const ipc = electron.ipcRenderer;


let start_btn = document.getElementById('start_btn');
start_btn.addEventListener('click',_=>{
	console.log("start clicked");
//on start_btn fire this event
	ipc.send('countdown-start'); //fire event to the main
})


//catch countdown_to_renderer event
ipc.on('countdown_to_renderer',(evt,count)=>{
	let count_elm = document.getElementById('count_elm');
	count_elm.innerHTML = count;
})


