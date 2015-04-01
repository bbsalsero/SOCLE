# SOCLE
nodejs modular server



just run node socle.js


what's the big idea???

it's easy,produce a node persistent environement that will automatically reload any change .

## socle.js


this is the base file of this project,
first of it , it require loadall.js(will see this later)

then start watching itself

to finnish it reload loadall.js and start watching it.

that way the loop is looped and the server is persistent ;-)

## loadall.js


this one is here to load "globaly" (this concept is very important) needed modules and variables(like __line).

it load all basic nodejs modules

and load the watcher,log ,uncaught and loaderp branch (there is a difference between modules and branch)


## watcher2.js

it purpose is quite simple, it reuire needed modules and watch it for changes then reload it.

## log.js

it's a global function to simply log in file instead of console.

use like this: log(options,data)

where options is a json and data is what you whant to log

## uncaught.js 

this is optional it's just here to handle error and not breaking the server.

## loaderp.js


just put here the process to load.





now you can work in live and see your work in progress without reloading it every time!!!!(it was killing me \O/\O/HAPPY!!!\O/\O/)


ps: if you whant to be able to interact between your project , just declare it in loaderp without var.

BBSALSERO.


#todo

*refacto.