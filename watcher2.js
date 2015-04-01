var extmod={};
var info=function(){
return	{
filename:__filename.split(__dirname+'/')[1]	,
dir:__dirname	,
cwd:process.cwd(),
title : process.title = __filename.split(__dirname+'/')[1]	,
pid:process.pid,
platform:process.platform,
memory:process.memoryUsage(),
uptime:process.uptime()
}}
// console.log(info())

//var fs = require('fs')
 //console.log('watch that '+__filename)
module.exports=function(mod,callback){
	//console.log(mod)
if(typeof extmod[mod] == 'undefined'){

// if(unload == true){

// 	delete require.cache[require.resolve(mod)]

// }
	extmod[mod]=require(mod)

// console.log(extmod)


fs.watchFile(mod, function (curr, prev) {
	console.log('the current mtime is: ' + curr.mtime);
	console.log('the previous mtime was: ' + prev.mtime);
	//var depo=''//require('./lib/depo.js')
	
	console.log(mod +' reloading...')

	
	if(mod == __filename){
	var myextmod={}
	for(mod in extmod){

		myextmod[mod]=extmod[mod]
	} 
		//console.log(extmod)
	}

	delete require.cache[require.resolve(mod)]

	try{
	if(mod == __filename){
	
		//console.log(extmod)
		myextmod[mod]=extmod[mod]
for(mod in extmod){
if(mod != __filename){
		extmod[mod]=myextmod[mod]}
	} 
		//extmod=myextmod
		
	}

		extmod[mod]=require(mod)

// console.log(extmod)
	//	console.log(loader())


//loader()

// return extmod[mod]
 	}catch(err){


		console.log(__filename+' '+__line+' err:',err)
 	}
});

	////console.log(res)

	
}
	return extmod[mod]
};
var watcher=require(__filename);

watcher=watcher(__filename)
//var socle=watcher('./socle.js')