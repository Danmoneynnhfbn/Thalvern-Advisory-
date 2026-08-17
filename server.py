from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from functools import partial
import os

class SpaHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path in ('', '/'):
            self.path = '/index.html'
        else:
            normalized = self.path.split('?', 1)[0].split('#', 1)[0]
            candidate = self.translate_path(normalized)
            if not os.path.exists(candidate) or os.path.isdir(candidate):
                self.path = '/index.html'
        return super().do_GET()

    def log_message(self, format, *args):
        return

handler = partial(SpaHandler, directory=os.getcwd())
server = ThreadingHTTPServer(('0.0.0.0', 3000), handler)
print('Serving at http://localhost:3000')
server.serve_forever()
