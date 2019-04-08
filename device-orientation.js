/**
 * `device-orientation`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
import {
  PolymerElement,
  html
} from '@polymer/polymer/polymer-element.js';


class deviceOrientation extends PolymerElement {
  static get template() {
    return html `
     <style>
       :host {
         display: block;
         text-align: justify;
         font-family: 'Montserrat', sans-serif;
       }

       h1 {
         display: block;
         text-align: center;
         font-family: 'Montserrat', sans-serif;
       }
     </style>
       <ul>
         <p>Corrected Rotation:{{corrected}}</p>
       </ul>
     `;
  }
  static get properties() {
    return {

      original: {
        type: Number,
        notify: true,
        reflectToAttribute: true,
        value: 0
      },

      rotation: {
        type: Number,
        notify: true,
        reflectToAttribute: true,
        value: 0
      },

      corrected: {
        type: Number,
        notify: true,
        reflectToAttribute: true,
        value: 0
      },

      absolute: {
        type: Boolean,
        notify: true,
        reflectToAttribute: true,
        value: true
      },

      exist: {
        type: Boolean,
        notify: true,
        reflectToAttribute: true,
        value: false
      },

      counter: {
        type: Number,
        notify: true,
        reflectToAttribute: true,
        value: 0
      },

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
    };
  }

  connectedCallback() {
    super.connectedCallback();
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', this.logOrientation.bind(this), true);
    } else {
      console.log("The device orientation is not supported.");
    }
  }

  disconnectedCallback() {
    window.removeEventListener('deviceorientation', this.logOrientation.bind(this), true);
  }

  logOrientation(input) {
    this.absolute = input.absolute;
    if (input.alpha) {
      this.rotation = input.alpha;
      this.corrected = Math.abs(this.rotation - this.original);
      if (this.counter == 0) {
        this.storeOrigin(this.rotation);
        this.exist = true;
        this.counter += 1;
      }
      this.counter += 1;
      this.exist = true;
      //this.updateClock(this.corrected);
    }
    else {
      this.exist = false;
      console.log("Sorry, this device does not support the device orientation event")
    }
  }
  storeOrigin(originAlpha) {
    this.original = originAlpha;
  }

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

}

window.customElements.define('device-orientation', deviceOrientation);
