import { ControllerlyServer } from 'controllerly-core';
import { version as packageVersion } from './version.generated';

export interface KeyMapping {
    left: string,
    right: string,
    start: string,
    a: string,
    b: string
}

/**
 * Game-side Controllerly API.
 */
export class Controllerly {

    private _server: ControllerlyServer;

    private _useGamepadAPI: boolean = false;

    /**
     * Creates a new Controllerly instance.
     */
    constructor() {
        this._server = new ControllerlyServer();
    }

    /**
     * Map connected gamepads to certain key events.
     * If the user presses the buttons the key events are emitted.
     * 
     * This should ease the process of integrating Controllerly.
     */
    putKeyboardMapping(index: number, mapping: KeyMapping) {
    }

    /**
     * Presents the ConnectionCode in an alert.
     * The alert closes if a controller connects.
     */
    showConnectionCodeAlert() {
    }

    private enableGamepadAPI() {

    }

    private disableGamepadAPI() {

    }

    /* Getter and Setter */

    set useGamepadAPI(useAPI: boolean) {
        if (useAPI) {
            if (!this._useGamepadAPI) {
                // enable API
                this.enableGamepadAPI();
            }
        } else {
            if (this._useGamepadAPI) {
                // disable API
                this.disableGamepadAPI();
            }
        }
        // store value
        this._useGamepadAPI = useAPI;
    }

    get server(): ControllerlyServer {
        return this._server;
    }

    /**
     * Controllerly maps around the native Web Gamepad API.
     * Defaults to true.
     */
    get useGamepadAPI(): boolean {
        return this._useGamepadAPI;
    }

    get version(): string {
        return packageVersion;
    }

    
}