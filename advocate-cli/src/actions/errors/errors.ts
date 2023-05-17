export const errorActions = (cdkFolderPath: string) => {
  return [
    {
      type: 'add',
      skipIfExists: true,
      path: `../${cdkFolderPath}/stateless/src/errors/resource-not-found.ts`,
      templateFile: 'src/templates/errors/resource-not-found.ts.hbs',
    },
    {
      type: 'add',
      skipIfExists: true,
      path: `../${cdkFolderPath}/stateless/src/errors/validation-error.ts`,
      templateFile: 'src/templates/errors/validation-error.ts.hbs',
    },
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/stateless/src/errors/index.ts`,
      templateFile: 'src/templates/errors/index.ts.hbs',
    },
  ];
};
