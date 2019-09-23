import { expect } from 'chai';
import 'mocha';
import { delay } from './TestUtils';

import controllerly from '../src/index';

import Controllerly2 from '../src/index';
import { Controllerly } from '../src/Controllerly';


describe('Controllerly Index test', () => {


    describe('Library import', () => {
        let Controllerly3: Controllerly;
        before(() => {
            Controllerly3 = require('../src/index').default;
        });
        console.log('api', controllerly === Controllerly2);
        it('should all be the same instances', () => {
            expect(controllerly).to.equal(Controllerly2);
        });
        it('required lib should be the same instance', () => {
            expect(Controllerly2).to.equal(Controllerly3);
        });

    });
    
});