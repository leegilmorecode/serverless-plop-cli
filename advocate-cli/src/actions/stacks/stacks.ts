export const stacksActions = (cdkFolderPath: string) => {
  return [
    {
      type: 'delete lib folder',
      force: true,
      path: `../${cdkFolderPath}/lib/`,
      data: {
        cdkFolderPath: cdkFolderPath,
      },
    },
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/bin/${cdkFolderPath}.ts`,
      templateFile: 'src/templates/bin/bin.template.ts.hbs',
      data: {
        cdkFolderPath: cdkFolderPath,
      },
    },
    {
      type: 'add',
      skipIfExists: true,
      path: `../${cdkFolderPath}/stateless/stateless.ts`,
      templateFile: 'src/templates/stacks/stateless.ts.hbs',
      data: {
        cdkFolderPath: cdkFolderPath,
      },
    },
    {
      type: 'add',
      skipIfExists: true,
      path: `../${cdkFolderPath}/stateful/stateful.ts`,
      templateFile: 'src/templates/stacks/stateful.ts.hbs',
      data: {
        cdkFolderPath: cdkFolderPath,
      },
    },
  ];
};
