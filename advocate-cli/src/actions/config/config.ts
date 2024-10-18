export const configActions = (cdkFolderPath: string) => {
  return [
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/stateless/src/config/config.ts`,
      templateFile: 'src/templates/config/config.ts.hbs',
    },
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/stateless/src/config/index.ts`,
      templateFile: 'src/templates/config/index.ts.hbs',
    },
  ];
};
