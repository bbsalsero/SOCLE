
var hw='hello world!'
console.log(hw)

log({},hw)


var options={}

options.n='helloworld.log'
options.line=__line
options.out=true
options.filename=__filename

log(options,hw)
options.out=false
log(options,hw)
