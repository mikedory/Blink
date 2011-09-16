#BLINK!#

This is a silly-simple Tornado application that can run on Heroku.  And that's pretty damn exciting!  The app itself just blinks text.  That's it.  But you can see it in action here :http://radiant-day-6376.herokuapp.com/HELLO%20WORLD

To get it running yourself is pretty simple!  The only things you really have to do (assuming you've already created a Git repo for the app and a Heroku account) are to create a Heroku application on the Cedar stack: 

	heroku create --stack cedar

Then, do your commits, and when ready, push it up to heroku:

	git push heroku master

That's it!  Kablam!
