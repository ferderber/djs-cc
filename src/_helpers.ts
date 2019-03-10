import * as fs from 'fs';
import * as path from 'path';
import { Command } from './Command';
var padCache = [
    '',
    ' ',
    '  ',
    '   ',
    '    ',
    '     ',
    '      ',
    '       ',
    '        ',
    '         '
];

function loadCommands(files: string[]): any[] {
    let cmds = [];
    for (let i = 0; i < files.length; i++) {
        let ext = path.extname(files[i]);
        if (ext === '.js') {
            try {
                let _obj = require(files[i]);
                // if an object is exported, we expect a default export property
                if (typeof _obj === 'object') {
                    if (_obj['default'] === undefined) {
                        throw new Error(`Module '${files[i]}' must have a default export of type Command.`);
                    }
                    _obj = _obj['default'];
                }
                let obj = <Command>new _obj();
                if (obj instanceof Command) {
                    cmds.push(<Command>_obj);
                }
            } catch (err) {
                console.error(err);
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
                    if (err) {
                        reject(err);
                    }
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

export function rightPad(str: string, len: number, ch = ' '): string {
    len = len - str.length;

    if (len <= 0) {
        return str;
    }

    // use cache if common use case
    if (ch === ' ' && len < 10) {
        return str + padCache[len];
    }

    var pad = '';
    while (true) {
        if (len & 1) {
            pad += ch;
        }
        len >>= 1;
        if (len) {
            ch += ch;
        }
        else {
            break;
        }
    }

    return str + pad;
}

export async function getCommandsFromDirectory(p: string): Promise<any[]> {
    p = path.resolve(process.cwd(), p);
    const files = await findCommands(p);
    return loadCommands(files);
}

