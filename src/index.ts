import * as fs from 'fs';
import path from 'path';

import * as plist from 'plist';

export const asPlist = async () => {
    return readJSON2plist(path.join(__dirname, '../dotnugg.tmLanguage.json'))
        .then(data => {
            return data;
        })
        .catch(e => {
            throw new Error(e);
        });
};

/**
 * Read a json file and convert to plist as a promise
 */
function readJSON2plist(path: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        fs.readFile(path, (error, data) => {
            if (error) {
                reject(error);
            } else {
                const js_g = data.toString();
                const pl_g = plist.build(JSON.parse(js_g));
                resolve(pl_g);
            }
        });
    });
}
