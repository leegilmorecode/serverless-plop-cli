export const jestActions = (cdkFolderPath: string) => {
  return [
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/jest.config.js`,
      templateFile: 'src/templates/jest.config.js.hbs',
    },
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/jest.config.e2e.js`,
      templateFile: 'src/templates/jest.config.e2e.js.hbs',
    },
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/jest.config.int.js`,
      templateFile: 'src/templates/jest.config.int.js.hbs',
    },
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/jest.config.int.js`,
      templateFile: 'src/templates/jest.config.integration.js.hbs',
    },
  ];
};
