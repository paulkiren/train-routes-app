var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
should = chai.should();
const CSVParser = require('../src/CSVParser');


describe('#CSVParser', function () {
    let csvParser = new CSVParser('/data/stations.csv');

    describe('#Read Data From Fule', function () {
        it('should Read Data from File and return an array', function () {
            csvParser.readfile()
                .then(function (data) {
                    expect(data.length).to.be.greaterThan(0);
                    expect(typeof (data)).to.be.equal('object');
                    assert.ok(data);
                    done();
                }).catch(err => {
                    console.log(err);
                });;
        });
    });

});