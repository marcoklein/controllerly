
[![npm version](https://badge.fury.io/js/controllerly.svg)](https://badge.fury.io/js/controllerly)
[![Build Status](https://travis-ci.org/marcoklein/controllerly.svg?branch=master)](https://travis-ci.org/marcoklein/controllerly)
[![dependencies Status](https://david-dm.org/marcoklein/controllerly/status.svg)](https://david-dm.org/marcoklein/controllerly)
[![devDependencies Status](https://david-dm.org/marcoklein/controllerly/dev-status.svg)](https://david-dm.org/marcoklein/controllerly?type=dev)
![NPM](https://img.shields.io/npm/l/controllerly)

# Controllerly
Optimized Smartphone Gamepad Enabling Your Local Multiplayer Games.

Easy integration into your new and existing games.

### Add to HTML
```html
<script src="https://cdn.jsdelivr.net/npm/controllerly@latest">
    // Controllery is exposed as a global variable
    console.log(Controllerly.version);
    // you can map certain gamepad keys to keyboard events
    Controllerly.putKeyboardMapping(0, { // '0' is the first controller
        left: 'A',
        right: 'D',
        start: 'ENTER',
        a: 'Q',
        b: 'W'
    });
    // preview the connection code with an alert
    // the alert dismisses automatically if a client connects
    Controllerly.showConnectionCodeAlert();
</script>
```

You can also directly map to the native WebGamepad API. However, you should not provide keyboard mappings and use the GamepadAPI at the same time.
```javascript
// map onto native Gamepad API
Controllerly.useGamepadAPI = true;
```


### Install via npm
For a direct game integration you can add Controllerly directly to your project or game.

```javascript
npm install controllerly
```
Use with Typescript
```javascript
// import Controllerly instance
// the same instance is available globally
import { controllerly } from 'controllerly';
```

## FAQ

> How do I create my own Controllerly instance?
```javascript
// if you prefer creating your own instance use
import { Controllerly } from 'controllerly/lib/Controllerly';
let controllerly = new Controllerly();
// however, this is not recommended because Controllerly creates
// one new WebRTC connection for each instance
```

# Three Controllerly Packages
The project addresses three main concerns regarding remote smartphone gamepads through WebRTC:

![Controllerly Packages](./docs/controllerly-packages.png)

## Server
## Core
## Client
