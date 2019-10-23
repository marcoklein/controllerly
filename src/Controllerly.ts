import { ControllerlyServer } from 'controllerly-core';
import { version as packageVersion } from './version.generated';

export type KeyMapping = {[identifier: string]: string};

/**
 * Game-side Controllerly API.
 */
export class ControllerlyAPI {

    private _server: ControllerlyServer;

    private _gamepadAPIEnabled: boolean = false;

    private _keyboardMappings: {[index: number]: KeyMapping} = {};

    /**
     * Creates a new Controllerly instance.
     */
    constructor() {
        this._server = new ControllerlyServer();
        this.addListeners();
    }

    private addListeners() {
        this._server.onClientConnected.on((connection) => {
            console.log('Controllerly on client connection.');
            connection.onMessage.on((message) => {
                if (message.type == 'buttonEvent') {
                    let mapping = this._keyboardMappings[0];
                    if (mapping) {
                        for (let identifier in mapping) {
                            if (identifier === message.data.name) {
                                const key = mapping[identifier];
                                this.emulateKeyDownEvent(key);
                            }
                        }
                    }
                }
            });
        });
    }

    start(preferredConnectionCode?: string, numberOfRetries?: number): Promise<string> {
        return this._server.start(preferredConnectionCode, numberOfRetries);
    }

    /* Keyboard Mappings */

    addKeyboardMapping(mapping: KeyMapping): number {
        // return index of added mapping
        return -1;
    }

    /**
     * Map connected gamepads to certain key events.
     * If the user presses the buttons the key events are emitted.
     * 
     * This should ease the process of integrating Controllerly.
     */
    putKeyboardMapping(index: number, mapping: KeyMapping) {
        this._keyboardMappings[index] = mapping;
    }
    
    protected emulateKeyDownEvent(key: string) {
        let keyboardEvent = new KeyboardEvent("keydown",
            {
                key
            }
        );
        document.dispatchEvent(keyboardEvent);
    }

    /* Utils */

    /**
     * Presents the ConnectionCode in an alert.
     * The alert closes if a controller connects.
     */
    showConnectionCodeAlert() {
    }

    enableGamepadAPI() {
        if (this._gamepadAPIEnabled) {
            console.warn('Controllerly Warning: Gamepad API already enabled.');
            return;
        }
        this._gamepadAPIEnabled = true;
    }

    /* Getter and Setter */

    get server(): ControllerlyServer {
        return this._server;
    }

    /**
     * Controllerly maps around the native Web Gamepad API.
     * Defaults to true.
     */
    get gamepadAPIEnabled(): boolean {
        return this._gamepadAPIEnabled;
    }

    get version(): string {
        return packageVersion;
    }

    get keyboardMappings(): {[index: number]: KeyMapping} {
        return this._keyboardMappings;
    }

    
}