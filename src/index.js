var Graph = require('./Graph');
var CSVParser = require('./CSVParser');
const prompt = require('prompt');
const Logger = require('./Logger');
var fileName = process.argv[2] ? process.argv[2].split('=')[1] : '';

function resolveAfter2Seconds(x) { 
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x); // 10
  }
  


function getPrompt(params) {
    return new Promise((resolve, reject) => {
        const properties = [{ name: 'StartStation' }, { name: 'EndStation' }];
        prompt.start();
        function onErr(err) {
            Logger.error(err);
            return 1;
        }
        prompt.get(properties, function (err, result) {
            if (err) { reject(onErr(err)); }
            resolve(result);
        });
    });
}

(async function () {
    let file = arguments[0] || null;
    const csvParser = new CSVParser(file);
    csvParser.readfile().then(csvData => {
        let map = new Graph(csvData);
        getPrompt().then(userInput =>
            map.findRoute(userInput.StartStation, userInput.EndStation)
        );



    }).catch(err => Logger.error(err));

})(fileName)