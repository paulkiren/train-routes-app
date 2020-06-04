var FileReader = require('./ReadFile');
class CSVParser {
    constructor(fileName='.\\data\\stations.csv') {
        this.filePath = fileName;
        this.rawData = {};
        this.data = readfile(fileName) | null;
    }

    readfile(fileName) {
        Logger.info(fileName);
        if (fileName.length > 0) {
            try {
                FileReader.readFile(fileName).then((data) => {
                    this.rawData = data;
                    let rowArray = data.split('\n');
                    return rowArray;
                }).catch((err) => {
                    Logger.error(err);
                });
            } catch (error) {
                Logger.error(error);
            }
        } else {
            Logger.error(`You have not included CSV file name with the run command.
     please include it like given below. \n
     node .\index.js --file=[Your file name]`);
        }
    }

    getData() {
        return this.data();
    }
}
// parseCSVData(data) {
//     if (rowArray && rowArray.length > 0) {


//     } else {
//         throw new CSV_ERROR(`Rows should not be empty`);
//     }
// }



// class CSVParser {
//     constructor(data) {
//         console.log(data);
//         this._data = data;
//         this._parseCSVData();
//     }


//     }

//     getNoOfRows() {
//         return this._noOfRows;
//     }

//     getNoOfColumns() {
//         return this._noOfColoumns;
//     }

//     getTableObject() {
//         return this._tableObject;
//     }

//     _setNoOfRows(length) {
//         this._noOfRows = length;
//     }

//     _setNoOfColumns(length) {
//         this._noOfColoumns = length;
//     }

//     _setTableObject(rowArray) {
//         this._tableObject = rowArray.map((eachRow, rowIndex) => {
//             if (this._validateCSVByColumn(eachRow)) {
//                 var rowObject = {};
//                 eachRow.replace('\r', '').split(',').forEach((val, index) => {
//                     rowObject['column_' + (index + 1)] = val;
//                 })
//                 return rowObject;
//             } else {
//                 throw new CSV_ERROR(`Column mismatch at row number ${rowIndex}`);
//             }
//         });
//     }

//     _validateCSVByColumn(columnArray) {
//         return this._noOfColoumns === columnArray.split(',').length;
//     }


// }


// // Credits : https://rollbar.com/guides/javascript-throwing-exceptions/

// function CSV_ERROR(msg) {
//     const error = new Error(`INVALID CSV FORMAT: ${msg}`);
//     return error
// }
// CSV_ERROR.prototype = Object.create(Error.prototype);





module.exports = CSVParser;