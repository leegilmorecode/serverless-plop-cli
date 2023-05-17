export const sharedActions = (cdkFolderPath: string) => {
  return [
    {
      type: 'add',
      skipIfExists: true,
      path: `../${cdkFolderPath}/stateless/src/shared/date-utils.ts`,
      templateFile: 'src/templates/shared/date-utils.ts.hbs',
    },
    {
      type: 'add',
      skipIfExists: true,
      path: `../${cdkFolderPath}/stateless/src/shared/error-handler.ts`,
      templateFile: 'src/templates/shared/error-handler.ts.hbs',
    },
    {
      type: 'add',
      skipIfExists: true,
      path: `../${cdkFolderPath}/stateless/src/shared/logger.ts`,
      templateFile: 'src/templates/shared/logger.ts.hbs',
    },
    {
      type: 'add',
      skipIfExists: true,
      path: `../${cdkFolderPath}/stateless/src/shared/schema-validator.ts`,
      templateFile: 'src/templates/shared/schema-validator.ts.hbs',
    },
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/stateless/src/shared/index.ts`,
      templateFile: 'src/templates/shared/index.ts.hbs',
    },
  ];
};
