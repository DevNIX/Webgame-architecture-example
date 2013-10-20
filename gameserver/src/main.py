# -*- coding: utf-8 -*-

import sqlalchemy
from config import Configuration as conf


def main():
    print "Devtrance Game Server\n"
    print "Version: " + conf.version
    print "Protocol: " + conf.protocol

if __name__ == "__main__":
    main()