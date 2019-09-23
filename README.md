
[![npm version](https://badge.fury.io/js/controllerly.svg)](https://badge.fury.io/js/controllerly)
[![Build Status](https://travis-ci.org/marcoklein/controllerly.svg?branch=master)](https://travis-ci.org/marcoklein/controllerly)

# Controllerly
Optimized Smartphone Gamepad Enabling Your Local Multiplayer Games.

Easy integration into your new and existing games.

### Add to HTML
```html
<script src="https://cdn.jsdelivr.net/npm/controllerly@latest">
    // Controllery is exposed as a global variable
    console.log(Controllerly.version);
</script>
```

For a fast integration you can map certain keyboard keys:
```javascript
// add keyboard mappings for the first controller
Controllerly.putKeyboardMapping(0, {
    left: 'A',
    right: 'D',
    start: 'ENTER',
    a: 'Q',
    b: 'W'
});
```

### Install via npm
```javascript
npm install controllerly
```
Use with Typescript
```javascript
import { Controllerly } from 'controllerly';
```



# Three Controllerly Packages
The project addresses three main concerns regarding remote smartphone gamepads through WebRTC:

![Controllerly Packages](./docs/controllerly-packages.png)

## Server
## Core
## Client
