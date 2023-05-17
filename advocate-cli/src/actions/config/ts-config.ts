import { ActionType } from 'plop';

export const tsConfigActions = (cdkFolderPath: string): ActionType[] => {
  return [
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/tsconfig.json`,
      templateFile: 'src/templates/tsconfig.json.hbs',
    },
  ];
};
