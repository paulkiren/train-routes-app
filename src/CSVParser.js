var FileReader = require('./ReadFile');
class CSVParser {
    constructor(fileName) {
        this.filePath = path;
        this.rawData = {};
        this.data = {};
    }

    readfile(fileName) {

        Logger.info(fileName);
        if (fileName.length > 0) {
            try {
                FileReader.readFile(fileName).then((data) => {
                    this.rawData = data;
                    // let parser = new CSVParser(data);
                    let stationDetails = parser.getTableObject();
                    Logger.info(stationDetails);
                    let routes = {};
                    stationDetails.forEach((item, index) => {
                        let sourceStation = {};
                        if (routes[item.column_1]) {
                            sourceStation = routes[item.column_1];
                        }
                        sourceStation[item.column_2] = item.column_3;
                        routes[item.column_1] = sourceStation;

                    });
                    Logger.info(routes);
                })
                    .catch((err) => {
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
}



// class CSVParser {
//     constructor(data) {
//         console.log(data);
//         this._data = data;
//         this._parseCSVData();
//     }

//     _parseCSVData() {
//         let rowArray = this._data.split('\n');
//         if (rowArray && rowArray.length > 0) {
//             this._setNoOfRows(rowArray.length);
//             let columnArray = rowArray[0].split(',');
//             this._setNoOfColumns(columnArray.length);
//             this._setTableObject(rowArray);
//         } else {
//             throw new CSV_ERROR(`Rows should not be empty`);
//         }

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