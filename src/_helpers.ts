import fs = require('fs');
import path = require('path');
import Command = require('./Command');

function loadCommands(files: string[]): any[] {
    let cmds = [];
    for (let i = 0; i < files.length; i++) {
        let ext = path.extname(files[i]);
        if (ext === '.js') {
            try {
                let _obj = require(files[i]);
                if (_obj.prototype instanceof Command) {
                    cmds.push(<Command>_obj);
                }
            } catch (err) {
            }
        }
    }
    return cmds;
}
async function findCommands(p: string): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        fs.lstat(p, (err, stats) => {
            if (!err && stats.isDirectory()) {
                fs.readdir(p, (err, files) => {
                    if (err)
                        reject(err);
                    var paths = [];
                    for (var i = 0; i < files.length; i++) {
                        paths.push(path.join(p, files[i]));
                    }
                    resolve(paths);
                });
            }
            else {
                reject(err);
            }
        });
    });
}
export async function getCommandsFromDirectory(p: string): Promise<any[]> {
    p = path.resolve(process.cwd(), p);
    const files = await findCommands(p);
    return loadCommands(files);
}

