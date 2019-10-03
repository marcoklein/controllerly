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
export class ControllerlyAPI {

    private _server: ControllerlyServer;

    private _gamepadAPIEnabled: boolean = false;

    /**
     * Creates a new Controllerly instance.
     */
    constructor() {
        this._server = new ControllerlyServer();
    }

    start(preferredConnectionCode?: string, numberOfRetries?: number): Promise<string> {
        return this._server.start(preferredConnectionCode, numberOfRetries);
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

    
}