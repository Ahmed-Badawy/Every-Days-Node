console.log("code running");

const fs = require('fs');
const exec = require('child_process').exec;
const os = require('os');



let timer;
document.getElementById('input_field').addEventListener('keyup',evt=>{
	removeStatus();
	clearTimeout(timer);
	timer = setTimeout(_=>{
		let dir = formatDir(evt.target.value);
		console.log("Logging less: ", dir);

		if( isDir(dir) ){ checkGitStatus(dir) }
		setStatus('unknown')
	},500);
})

function isDir(dir){
	try{ return fs.lstatSync(dir).isDirectory() }
	catch(err){ console.log("Error happened: ",err); return false; }
}

function checkGitStatus(dir){
	exec('git status',{
		cwd: dir
	}, (err,stdout,stderr)=>{ //standered out , standered error
		console.log("err: ",err);
		console.log("stdout: ",stdout);
		console.log("stderr: ",stderr);
		if(err) return setStatus('unknown');
		if( /nothing to commit/.test(stdout) ) return setStatus('clean');
		return setStatus('dirty');
	})
}

function formatDir(dir){
	return /^~/.test(dir) ? os.homedir() + dir.substr(1).trim() 
				: dir.trim();
}

function setStatus(status){
	const el = removeStatus();
	el.classList.add(status);
}

function removeStatus(){
	const el = document.getElementById('status');
	el.classList.remove('unknown','clean','dirty');
	return el;
}






