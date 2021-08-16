import { promises as fs } from "fs";
import * as path from "path";
import { Command } from "./command";
const padCache = [
  "",
  " ",
  "  ",
  "   ",
  "    ",
  "     ",
  "      ",
  "       ",
  "        ",
  "         ",
];

function loadCommands(files: string[]): Command[] {
  const cmds = [];
  for (let i = 0; i < files.length; i++) {
    const ext = path.extname(files[i]);
    if (ext === ".js") {
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        let _obj = require(files[i]);
        // if an object is exported, we expect a default export property
        if (typeof _obj === "object") {
          if (_obj["default"] === undefined) {
            throw new Error(
              `Module '${files[i]}' must have a default export of type Command.`
            );
          }
          _obj = _obj["default"];
        }
        const obj = <Command>new _obj();
        if (obj instanceof Command) {
          cmds.push(<Command>obj);
        }
      } catch (err) {
        console.error(err);
      }
    }
  }
  return cmds;
}
async function findCommands(p: string): Promise<string[]> {
  const paths: string[] = [];
  try {
    // if access fails, return empty array
    await fs.access(p);
  } catch (err) {
    return paths;
  }
  const stats = await fs.lstat(p);
  if (stats.isDirectory()) {
    const files = await fs.readdir(p);
    for (let i = 0; i < files.length; i++) {
      if (path.extname(files[i]) === '.js' ) {
        paths.push(path.join(p, files[i]));
      }
    }
  }
  console.log(paths);
  return paths;
}

export function rightPad(str: string, len: number, ch = " "): string {
  len = len - str.length;

  if (len <= 0) {
    return str;
  }

  // use cache if common use case
  if (ch === " " && len < 10) {
    return str + padCache[len];
  }

  let pad = "";
  while (len) {
    if (len & 1) {
      pad += ch;
    }
    len >>= 1;
    if (len) {
      ch += ch;
    } else {
      break;
    }
  }

  return str + pad;
}

export async function getCommandsFromDirectory(p: string): Promise<Command[]> {
  p = path.resolve(process.cwd(), p);
  const files = await findCommands(p);
  return loadCommands(files);
}
