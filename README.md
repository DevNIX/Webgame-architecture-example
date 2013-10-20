Webgame-architecture-example
============================

This project is separated in two softwares: check the README.md of each in the folders named "gameserver" and "clientmanager"

Installation
------------

```
pip install -r gameserver/requirements.txt
```

Usage
-----

Start the server:
```
node clientmanager/main.js
```

Now you will need a new terminal to open a game server (which will be a client for the node server)
```
python gameserver/src/main.py
```
A command line will appear with a special shell indicator: "> ". You can open instances as you want.

Testing commands
----------------

When you open a new game server, the manager expects to send the id of your server
```
id: server1
```

You can see the game servers currently connected typing
```
echo servers
```
_This command is displayed on the node server manager terminal_
