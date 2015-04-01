	process.on('uncaughtException', function (err) {
		
		var options={ n: 'uncaught.log',
  out: true,
  line: __line}

log(options,'Caught exception: ' + err);
});
	