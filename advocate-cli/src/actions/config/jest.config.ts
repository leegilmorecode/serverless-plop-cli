export const jestActions = (cdkFolderPath: string) => {
  return [
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/jest.config.js`,
      templateFile: 'src/templates/jest.config.js.hbs',
    },
  ];
};
