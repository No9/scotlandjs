# scotlandjs

# Peer 2 Peer in Production (and Conferences)

## Slides 

Open Slides/index.html

## Demo 

* Install node.js with npm (v0.8.20 was used but 0.8.x up should be fine)
* Open 3 command prompts 
* In the first command prompt get the latest version of the tracker server and run it.

```
git clone git://github.com/artsalliancemedia/node-bittorrent-tracker.git
cd node-bittorrent-tracker I
node example.js
```

* In the second command prompt get the latest of this repository and run the file watcher

```
git clone git://github.com/No9/scotlandjs.git 
cd scotlandjs 
node 6.js 
```

* In the third folder change directory to the ```scotlandjs/client``` and run the reciever. 
N.B. The reciever is now in a different directory than the demo as the demo at the conference reported the file as already downloaded.  

```
cd scotlandjs/client 
node 5.js 
``` 
* In the scotlandjs folder create a folder named helloworld in a new folder called content. 

```
mkdir -p content/helloworld
```

* Now copy helloworld-master.zip from the root scotlandjs into ```scotlandjs/content/helloworld```  After a couple of minutes that file should appear in ```scotlandjs/client``` folder.
