/**
 * Exposes Controllerly API globally to the dom.
 */
import { ControllerlyAPI } from './Controllerly';


// add Controllerly API to dom
let root: any = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this ||
            {};

// use existing remote gamepad api or load new instance
var Controllerly: ControllerlyAPI = root.Controllerly || new ControllerlyAPI();
root.Controllerly = Controllerly;

export default Controllerly;
export { Controllerly };