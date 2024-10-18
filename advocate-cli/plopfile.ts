import * as path from 'path';

import fs from 'fs';
import { NodePlopAPI } from 'plop';
import { createApp } from './src/action-types/create-app/create-app.js';
import { installDeps } from './src/action-types/install-deps/install-deps.js';
import { createSecondaryAdapters } from './src/actions/adapters/secondary/create-secondary-adapters.js';
import { configActions } from './src/actions/config/config.js';
import { jestActions } from './src/actions/config/jest.config.js';
import { prettierActions } from './src/actions/config/prettier.config.js';
import { tsConfigActions } from './src/actions/config/ts-config.js';
import { errorActions } from './src/actions/errors/errors.js';
import { createFunction } from './src/actions/functions/create-function/create-function.js';
import { installCdkAppActions } from './src/actions/installs/install-cdk-app.js';
import { installDepsActions } from './src/actions/installs/install-deps.js';
import { sharedActions } from './src/actions/shared/shared.js';
import { stacksActions } from './src/actions/stacks/stacks.js';
import { typesActions } from './src/actions/types/types.js';

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
  // delete the test folder as we will create config for to int/unit/e2e
  plop.setActionType('delete test folder', (answers, config) => {
    fs.rmSync(config.path, { recursive: true, force: true });
    return `deleted test folder ${config.path}`;
  });
  // set the welcome message and the generators
  plop.setWelcomeMessage('please choose an option below:');
  plop.setGenerator('Create a new AWS CDK app', {
    description: 'Create a new AWS CDK app',
    prompts: [],
    actions: [...installCdkAppActions()],
  });
  plop.setGenerator('Refactor to clean code', {
    description: 'Refactor to clean code',
    prompts: [],
    actions: [
      ...installDepsActions(),
      ...errorActions(cdkFolderPath),
      ...tsConfigActions(cdkFolderPath),
      ...jestActions(cdkFolderPath),
      ...prettierActions(cdkFolderPath),
      ...typesActions(cdkFolderPath),
      ...configActions(cdkFolderPath),
      ...sharedActions(cdkFolderPath),
      ...stacksActions(cdkFolderPath),
    ],
  });
  plop.setGenerator('Create lambda adapter(s) [create, delete, update, get]', {
    ...createFunction(cdkFolderPath),
  });
  plop.setGenerator(
    'Create secondary adapter(s) [email, event, event-scheduler, dynamoddb, notifications]',
    {
      ...createSecondaryAdapters(cdkFolderPath),
    }
  );
}
