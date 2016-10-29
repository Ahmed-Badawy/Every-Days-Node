
- npm init -y : create automatic package.json 
- npm i -D electron-prebuilt
- npm i -D electron-packager rimraf


change the run application from the main:    inside the package.json

add this command to your scripts 
                          "build": "rimraf Photobombth-* && electron-packager . --platform=darwin,win32,linux --arch=x64 --icon=app",

also add the electron application name from here:   "productName": "Project One",



when you need to build do the following: - npm run build
                          








