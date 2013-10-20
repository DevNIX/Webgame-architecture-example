# -*- coding: utf-8 -*-

import sqlalchemy
import socket
from config import Configuration as conf


def main():
    print "Devtrance Game Server\n"
    print "Version: " + conf.version
    print "Protocol: " + conf.protocol

    s = socket.socket()
    s.connect(("localhost", 5400))

    while True:
        mensaje = raw_input("> ")
        if mensaje == "quit":
            s.close()
        s.send(mensaje)

if __name__ == "__main__":
    main()