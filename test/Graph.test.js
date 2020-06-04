var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
should = chai.should();
var Graph = require('../src/Graph');

describe('#Graph', function () {
    let map = new Graph();

    describe('#addStation()', function () {
        it('should add two stations and adjucency list', function () {
            map.addRoute('A', 'B', 10);
            assert.equal(map.stations.length, 2);
            assert.equal(map.adjacencyList['A'][0].distance, 10);
            assert.equal(map.adjacencyList['B'][0].distance, 10);
            // assert.equal(map.ad.length, 2);
        });
    });

    describe('#findRoute()', function () {
        it('should return Error!!: Not a Valid Station', function () {
            assert.equal(map.findRoute('A', 'C'), 'Error!!: Not a Valid Station');
        });
    });

    describe('#findRoute()', function () {
        before(function () {
            map.addRoute("C", "D", 20);
        });
        it('should return "No Routes From XX to YY "', function () {
            let startStation = 'A', endStation = 'C';
            assert.equal(map.findRoute(startStation, endStation), `No routes from ${startStation} to ${endStation}`);
        });
    });

    describe('#findRoute()', function () {
        before(function () {
            map.addRoute("B", "C", 7);
        });
        it('should return "Your Trip from XX to YY includes k stops and will take N minutes "', function () {
            let startStation = 'A', endStation = 'C';
            assert.equal(map.findRoute(startStation, endStation), `Your Trip from ${startStation} to ${endStation} includes 1 stops and will take 17 minutes`);
        });
    });

    describe('#constructor with array input', function () {

        it('should create a Graph object with given array input', function () {
            let csvData = ['A,B,5',
                'B,C,5',
                'C,D,7',
                'A,D,15',
                'E,F,5',
                'F,G,5',
                'G,H,10',
                'H,I,10',
                'I,J,5',
                'G,J,20'];
            map = new Graph(csvData)
            assert.equal(typeof (map), 'object');
            assert.equal(map.stations.length, 10);

        });
    });
});


