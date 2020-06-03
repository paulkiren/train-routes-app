const fs = require('fs');

FileReader = {
    readFile: function(fileName, call) {
        return new Promise((resolve, reject)=> {
            fs.readFile(fileName, 'utf8', (err, contents) =>{
                if(!err) {
                    resolve(contents);
                } else {
                    reject(err);
                }
            });
        })
    }
}

module.exports = FileReader;