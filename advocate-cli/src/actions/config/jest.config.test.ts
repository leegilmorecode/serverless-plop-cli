import { jestActions } from './jest.config';

const cdkFolderPath = 'customer-service';

describe('jest-config', () => {
  it('should return the correct object', () => {
    expect(jestActions(cdkFolderPath)).toMatchInlineSnapshot(`
[
  {
    "force": true,
    "path": "../customer-service/jest.config.js",
    "templateFile": "src/templates/jest.config.js.hbs",
    "type": "add",
  },
  {
    "force": true,
    "path": "../customer-service/jest.config.e2e.js",
    "templateFile": "src/templates/jest.config.e2e.js.hbs",
    "type": "add",
  },
  {
    "force": true,
    "path": "../customer-service/jest.config.int.js",
    "templateFile": "src/templates/jest.config.int.js.hbs",
    "type": "add",
  },
  {
    "force": true,
    "path": "../customer-service/jest.config.int.js",
    "templateFile": "src/templates/jest.config.integration.js.hbs",
    "type": "add",
  },
]
`);
  });
});
