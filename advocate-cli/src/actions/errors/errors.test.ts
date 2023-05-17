import { errorActions } from './errors';

const cdkFolderPath = 'customer-service';

describe('errors', () => {
  it('should return the correct object', () => {
    expect(errorActions(cdkFolderPath)).toMatchInlineSnapshot(`
[
  {
    "path": "../customer-service/stateless/src/errors/resource-not-found.ts",
    "skipIfExists": true,
    "templateFile": "src/templates/errors/resource-not-found.ts.hbs",
    "type": "add",
  },
  {
    "path": "../customer-service/stateless/src/errors/validation-error.ts",
    "skipIfExists": true,
    "templateFile": "src/templates/errors/validation-error.ts.hbs",
    "type": "add",
  },
  {
    "force": true,
    "path": "../customer-service/stateless/src/errors/index.ts",
    "templateFile": "src/templates/errors/index.ts.hbs",
    "type": "add",
  },
]
`);
  });
});
