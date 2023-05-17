import { NodePlopAPI } from 'plop';
import { executeNpmCommand } from '../../utils/execute-npm-command.js';

export const installDeps = (plop: NodePlopAPI) => {
  return plop.setActionType('install deps', () => {
    executeNpmCommand(
      'npm i uuid @aws-lambda-powertools/metrics @aws-lambda-powertools/tracer @aws-lambda-powertools/logger @middy/core ajv ajv-formats && npm i -D @types/aws-lambda @types/uuid esbuild'
    );
    return 'dependencies installing...';
  });
};
