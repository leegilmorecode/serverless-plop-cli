export const errorActions = (cdkFolderPath: string) => {
  return [
    {
      type: 'add',
      skipIfExists: true,
      path: `../${cdkFolderPath}/stateless/src/errors/resource-not-found.ts`,
      templateFile: 'templates/errors/resource-not-found.ts.hbs',
    },
    {
      type: 'add',
      skipIfExists: true,
      path: `../${cdkFolderPath}/stateless/src/errors/validation-error.ts`,
      templateFile: 'templates/errors/validation-error.ts.hbs',
    },
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/stateless/src/errors/index.ts`,
      templateFile: 'templates/errors/index.ts.hbs',
    },
  ];
};
