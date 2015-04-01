# SOCLE
nodejs modular server



just run node socle.js


what's the big idea???

it's easy,produce an node persistent environement that will automatically reload any change .

## socle.js


this is the base file of this project,
first of it , it require loadall.js(will see this later)

then start watching itself

to finnish it reload loadall.js and start watching it.

that way the loop is looped and the server is persistent ;-)

## loadall.js


this one is here to load "globaly" (this concept is very important) needed modules.

it load all basic nodejs modules

and load the watcher,log and uncaught branch (there is a difference between modules and branch)
