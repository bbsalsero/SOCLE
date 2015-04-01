if(!global.__stack){
Object.defineProperty(global, '__stack', {
  get: function(){
    var orig = Error.prepareStackTrace;
    Error.prepareStackTrace = function(_, stack){ return stack; };
    var err = new Error;
    Error.captureStackTrace(err, arguments.callee);
    var stack = err.stack;
    Error.prepareStackTrace = orig;
    return stack;
  }
});
}


if(!global.__line){
Object.defineProperty(global, '__line', {
  get: function(){
    return __stack[1].getLineNumber();
  }
});
}


var info=function(){
return	{
filename:__filename.split(__dirname+'/')[1]	,
dir:__dirname	,
cwd:process.cwd(),
title : process.title = __filename.split(__dirname+'/')[1]  ,
pid:process.pid,
platform:process.platform,
memory:process.memoryUsage(),
uptime:process.uptime()
}}
 
crypto = require('crypto');
dns=require ('dns');
domain=require('domain');
fs=require('fs');
http=require('http');
https=require('https');
net=require('net');
os=require('os');
path=require('path');
punycode=require('punycode');
readline=require('readline');
repl = require("repl");
StringDecoder = require('string_decoder').StringDecoder;
tls = require('tls');
dgram = require('dgram');
url=require('url');
util = require('util');
vm = require('vm')
zlib = require('zlib');
 
watcher=require('./watcher2.js')

 log=function(a,b){
	return watcher('./log.js')(a,b)
}
log({},'socle is loaded')
 var uncaught=function(){
  return watcher('./uncaught.js')
}

uncaught()

var loader= watcher('./loaderp.js')
