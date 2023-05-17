import * as path from 'path';

import { NodePlopAPI } from 'plop';
import { createApp } from './src/action-types/create-app/create-app.js';
import { createFunction } from './src/actions/functions/create-function/create-function.js';
import { errorActions } from './src/actions/errors/errors.js';
import fs from 'fs';
import { installCdkAppActions } from './src/actions/installs/install-cdk-app.js';
import { installDeps } from './src/action-types/install-deps/install-deps.js';
import { installDepsActions } from './src/actions/installs/install-deps.js';
import { jestActions } from './src/actions/config/jest.config.js';
import { sharedActions } from './src/actions/shared/shared.js';
import { stacksActions } from './src/actions/stacks/stacks.js';
import { tsConfigActions } from './src/actions/config/ts-config.js';

const cdkFolderPath = path.basename(process.cwd());

export default function (plop: NodePlopAPI) {
  // create the new cdk app
  createApp(plop);
  // install the common deps that we need
  installDeps(plop);
  // delete the lib folder as it contains the single stack that we replace
  // with the stateless and stateful stacks
  plop.setActionType('delete lib folder', (answers, config) => {
    fs.rmSync(config.path, { recursive: true, force: true });
    return `deleted lib folder ${config.path}`;
  });
  // set the welcome message and the generators
  plop.setWelcomeMessage('please choose an option below:');
  plop.setGenerator('Create a new CDK app', {
    description: 'Create a new CDK app',
    prompts: [],
    actions: [...installCdkAppActions()],
  });
  plop.setGenerator('Create all base deps', {
    description: 'Create all of the base shared libs and config files',
    prompts: [],
    actions: [
      ...installDepsActions(),
      ...errorActions(cdkFolderPath),
      ...tsConfigActions(cdkFolderPath),
      ...jestActions(cdkFolderPath),
      ...sharedActions(cdkFolderPath),
      ...stacksActions(cdkFolderPath),
    ],
  });
  plop.setGenerator('Create tsconfig.json', {
    description: 'Create the tsconfig.json with path aliases',
    prompts: [],
    actions: [...tsConfigActions(cdkFolderPath)],
  });
  plop.setGenerator('Create jest.config.js', {
    description: 'Create the jest.config.js with path aliases',
    prompts: [],
    actions: jestActions(cdkFolderPath),
  });
  plop.setGenerator('Create shared utils', {
    description: 'Create the shared utility functions',
    prompts: [],
    actions: [...sharedActions(cdkFolderPath)],
  });
  plop.setGenerator('Create lambda adapter', {
    ...createFunction(cdkFolderPath),
  });
}
