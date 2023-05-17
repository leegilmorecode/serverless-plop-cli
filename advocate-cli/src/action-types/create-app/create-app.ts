import { NodePlopAPI } from 'plop';
import { executeNpmCommand } from '../../utils/execute-npm-command.js';

export const createApp = (plop: NodePlopAPI) => {
  return plop.setActionType('create the cdk app', () => {
    executeNpmCommand('cdk init app --language typescript');
    return 'new cdk app installing...';
  });
};
