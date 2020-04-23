
[![npm version](https://badge.fury.io/js/controllerly.svg)](https://badge.fury.io/js/controllerly)
[![Build Status](https://travis-ci.org/marcoklein/controllerly.svg?branch=master)](https://travis-ci.org/marcoklein/controllerly)
[![dependencies Status](https://david-dm.org/marcoklein/controllerly/status.svg)](https://david-dm.org/marcoklein/controllerly)
[![devDependencies Status](https://david-dm.org/marcoklein/controllerly/dev-status.svg)](https://david-dm.org/marcoklein/controllerly?type=dev)
[![Known Vulnerabilities](https://snyk.io//test/github/marcoklein/controllerly/badge.svg?targetFile=package.json)](https://snyk.io//test/github/marcoklein/controllerly?targetFile=package.json) [![Greenkeeper badge](https://badges.greenkeeper.io/marcoklein/controllerly.svg)](https://greenkeeper.io/)
![NPM](https://img.shields.io/npm/l/controllerly)

# Controllerly
Optimized Smartphone Gamepad Enabling Your Local Multiplayer Games.

Easy integration into your new and existing games.

## Add to HTML
```html
<script src="https://cdn.jsdelivr.net/npm/controllerly@latest"></script>
<script>
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
Controllerly.enableGamepadAPI();
```

## Install via npm
For a direct game integration you can add Controllerly directly to your project or game.

```javascript
npm install controllerly
```
Use with Typescript
```javascript
// import Controllerly instance
// the same instance is available globally
import Controllerly from 'controllerly';
```

## Gamepad Layout Templates
Use unique gamepad layouts that fit your game or project.

```javascript
Controllerly.changeLayout('classic');
```

Layouts define ids for the input controls like buttons. For the classic layout they are:
```javascript
left, right
start, select
a, b
```

> TODO insert pic

The left and right area are the major areas. On small devices the user has the option to hide the center (green). He then has to open the center through an extra button.

## Using Advanced Input Events
To get the most out of your smartphone controlled gamepad, Controllerly provides the option to react to double taps or swipes.

You have the following options:
```javascript
// basics
active
inactive

// taps
tap
longPress

// swipes
swipeUp
swipeLeft
swipeRight
swipeDown
```

In your code you can then listen by writing
```javascript
Controllerly.on('b_longPress');
```

If you map keyboard events you extend the button name with the input action.
```javascript
Controllerly.putKeyboardMapping(0, {
    left_tap: 'A',
    right_doubleTap: 'D',
    start_longPress: 'ENTER',
    a: 'E',
    a_swipeUp: 'Q'
});
```


## FAQ

> How do I create my own Controllerly instance?
```javascript
// if you prefer creating your own instance use
import { ControllerlyAPI } from 'controllerly/lib/Controllerly';
let controllerly = new ControllerlyAPI();
// however, this is not recommended because Controllerly creates
// one new WebRTC connection for each instance
```

# Three Controllerly Packages
The project addresses three main concerns regarding remote smartphone gamepads through WebRTC:

![Controllerly Packages](./docs/controllerly-packages.png)

[Controllerly Server (This Repository)](https://github.com/marcoklein/controllerly)

[Controllerly Core](https://github.com/marcoklein/controllerly-core)

[Controllerly Client](https://github.com/marcoklein/controllerly-client)

## Server
The server lives on the game-side. It manages game integration and offers an API to integrate Controllerly into your games.

## Core
## Client
