export const typesActions = (cdkFolderPath: string) => {
  return [
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/types/stage.ts`,
      templateFile: 'src/templates/types/stage.ts.hbs',
    },
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/types/index.ts`,
      templateFile: 'src/templates/types/index.ts.hbs',
    },
  ];
};
