import { utilsActions } from './utils';

const cdkFolderPath = 'customer-service';

describe('utils', () => {
  it('should return the correct object', () => {
    expect(utilsActions(cdkFolderPath)).toMatchInlineSnapshot(`
[
  {
    "force": true,
    "path": "../customer-service/utils/ephemeral-utils/ephemeral-utils.ts",
    "templateFile": "src/templates/utils/ephemeral-utils/ephemeral-utils.ts.hbs",
    "type": "add",
  },
  {
    "force": true,
    "path": "../customer-service/utils/ephemeral-utils/index.ts",
    "templateFile": "src/templates/utils/ephemeral-utils/index.ts.hbs",
    "type": "add",
  },
  {
    "force": true,
    "path": "../customer-service/utils/index.ts",
    "templateFile": "src/templates/utils/index.ts.hbs",
    "type": "add",
  },
]
`);
  });
});
