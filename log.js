


var logged={};

module.exports=function(options,d){

var options=options||{}

	if(options != null && typeof options.n != 'undefined' && options.n != undefined){
var name=options.n
}
else{

var name = 'global.log';}

if(typeof logged[name] == 'undefined')
{

 logged[name] = fs.createWriteStream('./'+name, {flags : 'a'});

}

date=new Date();

options.date=date;
options.epoch=date.getTime();
options.data=JSON.stringify(d,null,4);

logged[name].write(util.format(options) + '\n');


	if(options != null && options.out == true){
var log_stdout = process.stdout;
  log_stdout.write(util.format(d) + '\n');
}

}