#!/usr/bin/env python
import os.path
import tornado.escape
import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web
import unicodedata
from tornado.options import define, options


# application settings and handle mapping info
class Application(tornado.web.Application):
	def __init__(self):
		handlers = [
			(r"/([^/]+)?", MainHandler)
		]
		settings = dict(
			page_title=u'IMPORTANT',
			template_path=os.path.join(os.path.dirname(__file__), "templates"),
			static_path=os.path.join(os.path.dirname(__file__), "static"),
			debug=True,
		)
		tornado.web.Application.__init__(self, handlers, **settings)


# teh main page
class MainHandler(tornado.web.RequestHandler):
	def get(self, phrase):
		if not phrase:
			self.render("main.html", phrase='Sadface.', page_heading='Important info!')
			return;
		self.render("main.html", phrase=phrase, page_heading='Important info!')


# WARM IT UP, CHRIS!
def main():
	tornado.options.parse_command_line()
	http_server = tornado.httpserver.HTTPServer(Application())
	http_server.listen(os.environ.get("PORT", 5000))
	tornado.ioloop.IOLoop.instance().start()

if __name__ == "__main__":
	main()
