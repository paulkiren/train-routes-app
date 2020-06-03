import { readFile } from 'fs';

FileReader = {
    readFile: function (fileName, call) {
        return new Promise((resolve, reject) => {
            readFile(fileName, 'utf8', (err, contents) => {
                if (!err) {
                    resolve(contents);
                } else {
                    reject(err);
                }
            });
        })
    }
}

export default FileReader;