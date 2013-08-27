#!/usr/bin/python

import os
import cherrypy

class Argus:
    @cherrypy.expose
    def index(self, branch):
        return branch

class Root:
    pass

root = Root()

root.argus = Argus()

conf = {
    '/': {
        'tools.staticdir.on': True,
        'tools.staticdir.dir': os.path.abspath(os.path.dirname(__file__)),
        'tools.staticdir.index': 'index.html',
        },
    }

cherrypy.quickstart(root, config=conf)

