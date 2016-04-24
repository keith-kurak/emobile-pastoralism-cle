Welcome to the emobile-pastoralism-cle wiki!

Yomad

Yomad is designed to aid pastoralists and their families around the world by creating an online community that is focused on their needs.  Pastoralism is the branch of agriculture concerned with the raising of livestock. "Pastoralism" generally has a mobile aspect, moving the herds in search of fresh pasture and water.  
Our team concentrated on meeting some of the unique challenges of this lifestyle.
- Apps should be intuitive, perhaps symbol-or picture based to make accessible to the widest possible audience.
- Unreliable internet/data connectivity: simplicity and low data use recommended.
- Availability of smartphones may be limited.
Our solution addresses these constraints in the following ways
- To solve the issue of language, we implemented minimalist design using icons and pictures whenever possible. Also recognizing that we do not have intimate knowledge of this life, we made an effort to allow user generated content.
- To address potential technological barriers, we decided to make a web-crossover app, basically a smart phone app that is a web site. We made every effort to make our site readable on all screens, and to limit the amount of data that would be used. Ultimately we hope to run and interact with our site using the most basic phone we have available!

To join our team, follow our steps below (we are working to improve the documentation as we go!)



First step for anything:

1. Download the github repo using the Github client.

Here's how to install and run in your browser (Windows)

1. Download and install Fenix: http://fenixwebserver.com
2. Open Fenix
3. Create a new website. Enter 8080 for the port and set the folder to be emobile-pastoralism-cle\www
4. Click the play button to start the web server
5. In your browser, navigate to localhost:8080
6. If you get the error "angular is not defined" you will need to install the angular dependencies using node.js and bower. I found this site helpful: https://ruleoftech.com/2015/setting-up-bower-and-gulp-in-windows
7. To summarize, install node.js from http://nodejs.org
8. Once installed open the command prompt and type 'npm install -g bower' to install bower.
9. then in your git shell (settings>open in git shell) navigate to the www/ directory and run command bower install (it is important to be in the same directory as the bower.json file) If this runs successfully the site should now run!

Here's how to install and run in your browser (OS X)

1. Open the command prompt and navigate to your github project root folder
2. Type command "cd www"
3. Run python -m SimpleHTTPServer 8080
4. In your browser, navigate to localhost:8080

Here's how to install and run on an Android device:

1. Download and setup Android SDK (pain in the butt)
2. Download and install Node.js
3. Download and install Apache Cordova
4. Open up the command prompt and navigate to the project folder (the root folder of the github repo)
5. Plug in your device. Make sure USB debugging is enabled.
6. Run "cordova run android --device"
