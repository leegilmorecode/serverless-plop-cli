export const prettierActions = (cdkFolderPath: string) => {
  return [
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/.prettierrc`,
      templateFile: 'src/templates/.prettierrc.hbs',
    },
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/.prettierignore`,
      templateFile: 'src/templates/.prettierignore.hbs',
    },
  ];
};
