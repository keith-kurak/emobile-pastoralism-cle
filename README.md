#Yomad

Yomad is designed to aid pastoralists and their families around the world by creating an online community that is focused on their needs.  Pastoralism is the branch of agriculture concerned with the raising of livestock. "Pastoralism" generally has a mobile aspect, moving the herds in search of fresh pasture and water.  

Our team concentrated on meeting some of the unique challenges of this lifestyle.
- Apps should be intuitive, perhaps symbol-or picture based to make accessible to the widest possible audience.
- Unreliable internet/data connectivity: simplicity and low data use recommended.
- Availability of smartphones may be limited.

Our solution addresses these constraints in the following ways
- To solve the issue of language, we implemented minimalist design using icons and pictures whenever possible. Also recognizing that we do not have intimate knowledge of this life, we made an effort to allow user generated content.
- To address potential technological barriers, we decided to make a web-crossover app, basically a smart phone app that is a web site. We made every effort to make our site readable on all screens, and to limit the amount of data that would be used. Ultimately we hope to run and interact with our site using the most basic phone we have available!

#Features:

Our app first prompts the user to select their location, and will then provide a list of nearby points of interest, specifically access to emergency management (police, medical, etc). What we are most excited about is the ability for users to upload their own temporary beacons to provide real-time and relevant information about weather, emergencies, and livestock movements.  We recognize our own ignorance of pastoral life, and seek to provide an intuitive platform for those with real-world experience to build from. 
We have also integrated a mapping feature utilizing the OpenLayers open source library.  The points of interest nearby will show up on the map, and will hopefully aid someone trying to navigate through unfamiliar terrain.  We ultimately hope to bring in even more useful information like inclement weather, drought conditions, and other satellite imagery.  

#Platform

The app is written using web technologies, designed to be packaged as a Cordova app or used as a mobile website. The idea is that it would run as a native app on an Android phone or even in a browser of a non-smartphone.

The web backend is Firebase, a key/ value JSON store in the cloud. It made it really easy to have a cloud backend and simulate multiple users on the system. Instead of having to write web services, we could use Firebase's API (see the scripts/services folder) to interact with our JSON store. Our store is at yomad.firebaseio.com.

The Angular.js framework is used for structuring our HTML views and JavaScript controllers and services.

#How to Run

##First steps for all platforms (to run in your web browser):

1. Download the github repo using the Github client.
2. Install Node.js
3. Navigate to the www folder in the command prompt, and run 'npm install -g bower'
4. Run 'bower install' to install bower dependencies

##How to run in your browser (Windows)

1. Download and install Fenix: http://fenixwebserver.com
2. Open Fenix
3. Create a new website. Enter 8080 for the port and set the folder to be emobile-pastoralism-cle\www
4. Click the play button to start the web server
5. In your browser, navigate to localhost:8080

##Here's how to install and run in your browser (OS X)

1. Open the command prompt and navigate to your github project root folder
2. Type command "cd www"
3. Run python -m SimpleHTTPServer 8080
4. In your browser, navigate to localhost:8080

##Here's how to install and run on an Android device:

1. Download and setup Android SDK
2. Download and install Node.js
3. Download and install Apache Cordova
4. Open up the command prompt and navigate to the project folder (the root folder of the github repo)
5. Plug in your device. Make sure USB debugging is enabled.
6. Run "cordova run android --device"
