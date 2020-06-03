var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
should = chai.should();
var FileReader = require('../src/ReadFile');

describe('#FileReader.readFile("data/stations.csv")', function () {
    it('Should read file and return string', function (done) {
        FileReader.readFile('.\\data\\stations.csv')
            .then(function (data) {
                expect(data.length).to.be.greaterThan(0);
                expect(typeof (data)).to.be.equal('string');
                assert.ok(data);
                done();
            }).catch(err => {
                console.log(err);
            });;
    });
});