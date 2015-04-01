 
var loadall=require('./loadall.js');

var local={}

local[__filename]=watcher(__filename);


loadall=function(){
	return watcher('./loadall.js')
}
loadall()

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
info()
console.log('hello')

