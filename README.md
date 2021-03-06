# \<device-orientation\>

[![v1.0.0](http://img.shields.io/npm/v/REPO.svg?style=flat)](https://www.npmjs.com/package/device-orientation-with-clock "View this project on npm")

<snippet>
  <content><![CDATA[# ${1: device-orientation}

A simple polymer element that uses the deviceorientation web event to display the orientation of your device.
It displays the correct orientation by assuming that the orientation the device was originally in is the "start" orientation or the "origin"
## Installation
npm install --save device-orientation-with-clock
## Usage
The properties function offers:
1. 'original' which is the initially read value
2. 'rotation' which is the currently read value
3. 'corrected' which is the original - rotation to obtain a "corrected" value.
4. 'absolute' a Boolean variable expressing whether the orientation read is absolute or relative (most likely relative in modern browsers)
5. 'exist' a Boolean variable which tells whether the device is capable of providing orientation data or not.
6. 'counter' a pretty much useless counter that tells you how many times the event was called by the browsers

*You may also notice commented out 'hour' and 'minute' along with some other code relevant to these properties. Uncomment this code if you would like to also use the orientation as a sort of 24 hour clock.*

Essentially, rotation value 0.0 is set to 0:0 in time
and rotation value 359.0 is set to 24:59 in in time.

To display the values, you can either use data binding in the shadow DOM of the device-orientation.js file like this:

```html
<span><p>API Available?:{{exist}}</p></span>
<span><p>Corrected Rotation:{{corrected}}</p></span>
<span><p>Original Value:{{original}}</p></span>
```
OR

you may go to the index.html file in the demo folder and simply define some variables within the tags like this:

```javascript
<device-orientation>
  apiAvailable="{{exist}}"
  currentRotation="{{rotation}}"
  correctedRotation="{{corrected}}"
</device-orientation>
```

*OPTIONAL <br>
If you would like to use the clock functionality, navigate to the device-orientation.js file and uncomment the following code:*

In the static get properties() function:
```javascript
      // hour: {
      //   type: Number,
      //   notify: true,
      //   reflectToAttribute: true,
      //   value: 0
      // },
      //
      // minute: {
      //   type: Number,
      //   notify: true,
      //   reflectToAttribute: true,
      //   value: 0
      // },
```
and below 

```javascript
  // updateClock(currentAlpha){
  //   this.hour = Math.floor(currentAlpha/15);
  //   var tempMinute;
  //   tempMinute = Math.floor(currentAlpha/0.25);
  //   if (tempMinute > 60){
  //     this.minute = tempMinute-(60*this.hour);
  //   }
  //   else this.minute = tempMinute;
  //
  // }
```

Hopefully this helps somebody out, especially if you're just beginning with Polymer or Javascript or WebDev.  

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History
Initial push v1.0 | April 8, 2019

## License
MIT License
