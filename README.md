# BLINK!

This is a silly-simple Tornado application that can run on Heroku.  And that's pretty damn exciting!  The app itself just blinks text.  That's it.  But you can see it in action [here](http://blinky.herokuapp.com/HELLO%20WORLD).

This setup assumes you've already created a Git repo for the app and a Heroku account.  If you haven't done so, there's some great examples on how to do that on the [Facebook Python template for Heroku](https://github.com/heroku/facebook-template-python) and [Heroku devcenter for Facebook](http://devcenter.heroku.com/articles/facebook) articles, both of which (obviously) have made this possible.  Definitely read those before doing this.  Or after.  Or maybe both!


## Setting up your own

To get it running yourself is pretty simple!  The only things you really have to do are to create a Heroku application on the Cedar stack: 

	heroku create --stack cedar

Then, do your commits, and when ready, push it up to heroku:

	git push heroku master

That's it!  Kablam!

## And in case you want more...

So you'd like to use this, and see what kind of traffic you're seeing?  Okay!  Just add an enviornment variable to heroku for your Google Analytics ID like so:

	heroku config:add GOOGLEANALYTICSID=[your_id]

If you have one, it'll load the tracking urchin.  If you don't, the Tornado template will ignore that block and skip the analytics entirely.

And let's say you'd like to give yourself some props in the footer.  I mean, people do that sometimes, right?  Easy!

	heroku config:add GOOGLEANALYTICSID=[your_twitter_name]

Again, if you put this in the environment, it'll show the footer.  If not, it'll just skip it.