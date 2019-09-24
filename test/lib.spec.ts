import { expect } from 'chai';
import 'mocha';
import { delay } from './TestUtils';

import { Controllerly } from '../src/index';

import Controllerly2 from '../src/index';
import { ControllerlyAPI } from '../src/Controllerly';


describe('Controllerly Index test', () => {


    describe('Library import', () => {
        let Controllerly3: ControllerlyAPI;
        before(() => {
            Controllerly3 = require('../src/index').default;
        });
        it('should all be the same instances', () => {
            expect(Controllerly).to.equal(Controllerly2);
        });
        it('required lib should be the same instance', () => {
            expect(Controllerly2).to.equal(Controllerly3);
        });
    });

    describe('#enableGamepadAPI', () => {
        
    });
    
});