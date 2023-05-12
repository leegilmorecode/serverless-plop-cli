export const stacksActions = (cdkFolderPath: string) => {
  return [
    {
      type: 'delete lib folder',
      force: true,
      path: `../${cdkFolderPath}/lib/`, // // path.basename(process.cwd())
      data: {
        cdkFolderPath: cdkFolderPath,
      },
    },
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/bin/${cdkFolderPath}.ts`,
      templateFile: 'templates/bin/bin.template.ts.hbs',
      data: {
        cdkFolderPath: cdkFolderPath,
      },
    },
    {
      type: 'add',
      skipIfExists: true,
      path: `../${cdkFolderPath}/stateless/stateless.ts`,
      templateFile: 'templates/stacks/stateless.ts.hbs',
      data: {
        cdkFolderPath: cdkFolderPath,
      },
    },
    {
      type: 'add',
      skipIfExists: true,
      path: `../${cdkFolderPath}/stateful/stateful.ts`,
      templateFile: 'templates/stacks/stateful.ts.hbs',
      data: {
        cdkFolderPath: cdkFolderPath,
      },
    },
  ];
};
