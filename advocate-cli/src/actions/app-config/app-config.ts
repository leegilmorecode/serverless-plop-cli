export const appConfigActions = (cdkFolderPath: string) => {
  return [
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/app-config/app-config.ts`,
      templateFile: 'src/templates/app-config/app-config.ts.hbs',
    },
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/app-config/index.ts`,
      templateFile: 'src/templates/app-config/index.ts.hbs',
    },
  ];
};
