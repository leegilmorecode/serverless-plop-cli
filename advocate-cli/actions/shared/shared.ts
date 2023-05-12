export const sharedActions = (cdkFolderPath: string) => {
  return [
    {
      type: 'add',
      skipIfExists: true,
      path: `../${cdkFolderPath}/stateless/src/shared/date-utils.ts`,
      templateFile: 'templates/shared/date-utils.ts.hbs',
    },
    {
      type: 'add',
      skipIfExists: true,
      path: `../${cdkFolderPath}/stateless/src/shared/error-handler.ts`,
      templateFile: 'templates/shared/error-handler.ts.hbs',
    },
    {
      type: 'add',
      skipIfExists: true,
      path: `../${cdkFolderPath}/stateless/src/shared/logger.ts`,
      templateFile: 'templates/shared/logger.ts.hbs',
    },
    {
      type: 'add',
      skipIfExists: true,
      path: `../${cdkFolderPath}/stateless/src/shared/schema-validator.ts`,
      templateFile: 'templates/shared/schema-validator.ts.hbs',
    },
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/stateless/src/shared/index.ts`,
      templateFile: 'templates/shared/index.ts.hbs',
    },
  ];
};
