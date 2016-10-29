module.exports = function countDown(tick){
	let count = 3;
	let timer = setInterval(_=>{
		tick(count--);
		if(count<0) clearInterval(timer);
		console.log("countDown.js",count);
	},1000)	
}