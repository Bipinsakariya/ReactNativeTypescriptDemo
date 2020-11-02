# ReactNativeTypescriptDemo
Clone the Project:

URL: https://github.com/Bipinsakariya/ReactNativeTypescriptDemo.git
Installation steps:
Go to Project directory.
npm install
Android:
react-native run-android
iOS:
cd ios/pod install
cd ..
react-native run-ios
Library changes
=> Some 3rd party library needs changes in order to work as expected.

Go to node_modules/react-native-cn-richtext-editor/src/html
Open editor.js file, Inside <style> tag, on line 14 there is a body{...} block.

Replace the content of 'body' block with the below content.
//Paste this
display: flex;
flex-grow: 1;
flex-direction: column;
margin: 0;
font-family: 'Barlow', sans-serif;
font-size: 15px;
color:'#434649';
font-size: 15px;
line-height: 22px;
letter-spacing: -0.165px;
//

Below body{... } block, add the new 'img' block as given below
//Paste this 'img' below the 'body' block
img{
width: 100%;
height:290px;
margin: 8px 0px 8px 0px;
}
//

Prerequisites:
Node > 7 and npm (Recommended: Use npm)
Watchman brew install watchman
React Native CLI npm install -g react-native-cli
XCode > 11
JDK > 8
Android Studio and Android SDK
Folder structure:
This template follows a very simple project structure:

src: This folder is the main container of all the code inside your application.

redux: This folder contains all redux files[actions,reducers].

actions: This folder contains all actions that can be dispatched to redux.
reducers: This folder should have all your reducers.
components: Folder that contains all your application components.

constants: Folder that contains all your application constants like API’s , user fields.

Navigation: Folder that contains AuthNavigator and TabNavigator.

Screen: Each screen components should be stored inside screen's own folder.

Styles: Folder that contains globalStyle .

Utils: Folder that contains basic value names like colors, fonts, screenNames file.
