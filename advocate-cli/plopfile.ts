import * as path from 'path';

import { NodePlopAPI } from 'plop';
import { createFunction } from './actions/functions/create-function/create-function.js';
import { errorActions } from './actions/errors/errors.js';
import { executeNpmCommand } from './utils/execute-npm-command.js';
import fs from 'fs';
import { installCdkAppActions } from './actions/installs/install-cdk-app.js';
import { installDepsActions } from './actions/installs/install-deps.js';
import { jestActions } from './actions/config/jest.config.js';
import { sharedActions } from './actions/shared/shared.js';
import { stacksActions } from './actions/stacks/stacks.js';
import { tsConfigActions } from './actions/config/ts-config.js';

const cdkFolderPath = path.basename(process.cwd());

export default function (plop: NodePlopAPI) {
  // create the new cdk app
  plop.setActionType('create the cdk app', () => {
    executeNpmCommand('cdk init app --language typescript');
    return 'new cdk app installing...';
  });
  // install the common deps that we need
  plop.setActionType('install deps', () => {
    executeNpmCommand(
      'npm i uuid @aws-lambda-powertools/metrics @aws-lambda-powertools/tracer @aws-lambda-powertools/logger @middy/core ajv ajv-formats && npm i -D @types/aws-lambda @types/uuid'
    );
    return 'dependencies installing...';
  });
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
