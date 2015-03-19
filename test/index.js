'use strict';

var chai = require('chai'),
    expect = chai.expect,
    etcHosts = require('../');

describe('main function (etcHosts)', function () {

    beforeEach(function () {

    });
    afterEach(function () {

    });

    it('should give you a idea', function () {
        //expect docs: http://chaijs.com/api/bdd/
        //boolean
        expect(etcHosts()).to.be.true;
        //string
        expect('someString').to.be.a('string');
        expect('bar').to.equal('bar');
        expect('foo').to.have.length(3);
        expect('foo').to.have.length.within(2, 4);
        //array
        expect([ 1, 2, 3 ]).to.have.length.within(2, 4);
        expect({ tea: 'foo' }).to.have.property('tea');
    });
});
