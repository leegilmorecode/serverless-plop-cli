import { appConfigActions } from './app-config';

const cdkFolderPath = 'customer-service';

describe('app-config', () => {
  it('should return the correct object', () => {
    expect(appConfigActions(cdkFolderPath)).toMatchInlineSnapshot(`
[
  {
    "force": true,
    "path": "../customer-service/app-config/app-config.ts",
    "templateFile": "src/templates/app-config/app-config.ts.hbs",
    "type": "add",
  },
  {
    "force": true,
    "path": "../customer-service/app-config/index.ts",
    "templateFile": "src/templates/app-config/index.ts.hbs",
    "type": "add",
  },
]
`);
  });
});
