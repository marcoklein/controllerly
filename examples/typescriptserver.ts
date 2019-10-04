import { Controllerly } from '../src/index';

console.log('Controllerly Typescript Server Example.');
Controllerly.start().then(code => {
    console.log('Connection code: ', code);

    Controllerly.server.onClientConnected.on((connection) => {
        console.log('New client connection!')
        connection.onMessage.on((message) => {
            console.log('Retrieved message: ', message);
        });
    });
    Controllerly.server.onClientDisconnected.on((connection) => {
        console.log('Client disconnected!')
    });
});