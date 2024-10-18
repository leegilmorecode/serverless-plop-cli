export const utilsActions = (cdkFolderPath: string) => {
  return [
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/utils/ephemeral-utils/ephemeral-utils.ts`,
      templateFile:
        'src/templates/utils/ephemeral-utils/ephemeral-utils.ts.hbs',
    },
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/utils/ephemeral-utils/index.ts`,
      templateFile: 'src/templates/utils/ephemeral-utils/index.ts.hbs',
    },
    {
      type: 'add',
      force: true,
      path: `../${cdkFolderPath}/utils/index.ts`,
      templateFile: 'src/templates/utils/index.ts.hbs',
    },
  ];
};
