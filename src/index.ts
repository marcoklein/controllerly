/**
 * Exposes Controllerly API globally to the dom.
 */
import { Controllerly as Controllerly } from './Controllerly';


// add Controllerly API to dom
let root: any = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this ||
            {};

// use existing remote gamepad api or load new instance
var controllerly: Controllerly = root.controllerly || new Controllerly();
root.controllerly = controllerly;

export default controllerly;