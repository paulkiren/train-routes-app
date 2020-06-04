var Graph = require('./Graph');
var CSVParser = require('./CSVParser');
const prompt = require('prompt');
const Logger = require('./Logger');
Logger.info(process.argv);
var fileName = process.argv[2]? process.argv[2].split('=')[1]: '';
(function () {

    console.log(arguments);
    let file= arguments[0]|| null;
    const csvParser = new CSVParser(file);
    csvParser.readfile().then(csvData => {
        let map = new Graph(csvData);

        const properties = [
            {
                name: 'StartStation',
                validator: /^[a-zA-Z\s\-]+$/,
                warning: 'Username must be only letters, spaces, or dashes'
            },
            {
                name: 'EndStation',
                hidden: false
            }
        ];

        prompt.start();

        prompt.get(properties, function (err, result) {
            if (err) { return onErr(err); }

            console.log(map.findRoute(result.StartStation, result.EndStation));
            // console.log('Command-line input received:');
            // console.log('  Start_Station: ' + result.StartStation);
            // console.log('  End_Station: ' + result.EndStation);
        });

        function onErr(err) {
            console.log(err);
            return 1;
        }

    }).catch(err => console.log(err));

})(fileName)