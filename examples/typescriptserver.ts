import { Controllerly } from '../src/index';

console.log('Controllerly Typescript Server Example.');
console.log('Version: ' + Controllerly.version);
Controllerly.start().then(code => {
    console.log('Connection code: ', code);

    Controllerly.server.onClientConnected.on((connection) => {
        console.log('New client connection!');
        connection.onMessage.on((message) => {
            console.log('Retrieved message: ', message);
        });
    });
    Controllerly.server.onClientDisconnected.on((connection) => {
        console.log('Client disconnected!');
    });
});

/* Controllerly Configuration */

// default layout has left, right, start, select, a, and b
Controllerly.putKeyboardMapping(0, {
    left: 'A',
    right: 'D',
    start: 'ENTER',
    select: 'SPACE',
    a: 'W',
    b: 'S'
});

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log(`Fired keydown event with key "${keyName}".`, event);
});
document.addEventListener('keyup', (event) => {
    const keyName = event.key;
    console.log(`Fired keyup event with key "${keyName}".`);
});