import { exec as execCommand } from 'child_process';
import { promisify } from 'util';
const exec = promisify(execCommand);

export function executeNpmCommand(command: string) {
  (async (command) => {
    try {
      await exec(command);
    } catch (e) {
      console.error(e);
    }
  })(command);
}
