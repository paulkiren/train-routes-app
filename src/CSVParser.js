var FileReader = require('./ReadFile');
const Logger = require('./Logger');
class CSVParser {
    constructor(fileName = '.\\data\\stations.csv') {
        this.filePath = fileName;
        this.rawData = {};
        this.data = null;
    }

    readfile() {
        return new Promise((resolve, reject) => {
            Logger.info(this.filePath);
            if (this.filePath.length > 0) {
                try {
                    FileReader.readFile(this.filePath).then((data) => {
                        this.rawData = data;
                        let rowArray = data.split('\n');
                        resolve(rowArray);
                    }).catch((err) => {
                        Logger.error(err);
                    });
                } catch (error) {
                    Logger.error(error);
                    reject(err);
                }
            } else {
                Logger.error(`You have not included CSV file name with the run command.     please include it like given below. \n     node .src\\index.js --file=[Your file name]`);
                reject();
            }
        });
    }

}

function CSV_ERROR(msg) {
    const error = new Error(`INVALID CSV FORMAT: ${msg}`);
    return error
}
CSV_ERROR.prototype = Object.create(Error.prototype);


module.exports = CSVParser;