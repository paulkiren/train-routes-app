var Graph = require('./Graph');
var CSVParser = require('./CSVParser');
const prompt = require('prompt');
const Logger = require('./Logger');
var fileName = process.argv[2] ? process.argv[2].split('=')[1] : '';
(function () {
    let file = arguments[0] || null;
    const csvParser = new CSVParser(file);
    csvParser.readfile().then(csvData => {
        let map = new Graph(csvData);
        const properties = [{ name: 'StartStation' }, { name: 'EndStation' }];
        prompt.start();

        prompt.get(properties, function (err, result) {
            if (err) { return onErr(err); }

           Logger.info(map.findRoute(result.StartStation, result.EndStation));
        });

        function onErr(err) {
            Logger.error(err);
            return 1;
        }

    }).catch(err => Logger.error(err));

})(fileName)