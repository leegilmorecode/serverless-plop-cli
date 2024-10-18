import { configActions } from './config';

const cdkFolderPath = 'customer-service';

describe('config', () => {
  it('should return the correct object', () => {
    expect(configActions(cdkFolderPath)).toMatchInlineSnapshot(`
[
  {
    "force": true,
    "path": "../customer-service/stateless/src/config/config.ts",
    "templateFile": "src/templates/config/config.ts.hbs",
    "type": "add",
  },
  {
    "force": true,
    "path": "../customer-service/stateless/src/config/index.ts",
    "templateFile": "src/templates/config/index.ts.hbs",
    "type": "add",
  },
]
`);
  });
});
