#!/usr/bin/env node

import { Plop, run } from 'plop';

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import minimist from 'minimist';
import path from 'node:path';

const args = process.argv.slice(2);
const argv = minimist(args);

const __dirname = dirname(fileURLToPath(import.meta.url));

Plop.prepare(
  {
    cwd: argv.cwd,
    configPath: path.join(__dirname, './plopfile.js'),
    preload: argv.preload || [],
    completion: argv.completion,
  },
  (env) =>
    Plop.execute(env, (env) => {
      const options = {
        ...env,
        dest: process.cwd(),
      };
      return run(options, undefined, true);
    })
);
