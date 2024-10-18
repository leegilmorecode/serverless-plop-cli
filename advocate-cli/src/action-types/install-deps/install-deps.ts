import { NodePlopAPI } from 'plop';
import { executeNpmCommand } from '../../utils/execute-npm-command.js';

export const installDeps = (plop: NodePlopAPI) => {
  return plop.setActionType('install deps', () => {
    executeNpmCommand(
      'npm i convict @aws-sdk/client-scheduler @aws-sdk/client-eventbridge @aws-sdk/client-ses uuid @aws-lambda-powertools/metrics @aws-sdk/client-dynamodb @aws-sdk/client-sns @aws-sdk/util-dynamodb @middy/sqs-partial-batch-failure @aws-lambda-powertools/tracer @aws-lambda-powertools/logger @middy/core ajv ajv-formats && npm i -D @types/aws-lambda @types/uuid esbuild'
    );
    return 'dependencies installing...';
  });
};
