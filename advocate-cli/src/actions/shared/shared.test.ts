import { sharedActions } from './shared';

const cdkFolderPath = 'customer-service';

describe('shared', () => {
  it('should return the correct object', () => {
    expect(sharedActions(cdkFolderPath)).toMatchInlineSnapshot(`
[
  {
    "path": "../customer-service/stateless/src/shared/date-utils.ts",
    "skipIfExists": true,
    "templateFile": "src/templates/shared/date-utils.ts.hbs",
    "type": "add",
  },
  {
    "path": "../customer-service/stateless/src/shared/error-handler.ts",
    "skipIfExists": true,
    "templateFile": "src/templates/shared/error-handler.ts.hbs",
    "type": "add",
  },
  {
    "path": "../customer-service/stateless/src/shared/logger.ts",
    "skipIfExists": true,
    "templateFile": "src/templates/shared/logger.ts.hbs",
    "type": "add",
  },
  {
    "path": "../customer-service/stateless/src/shared/schema-validator.ts",
    "skipIfExists": true,
    "templateFile": "src/templates/shared/schema-validator.ts.hbs",
    "type": "add",
  },
  {
    "force": true,
    "path": "../customer-service/stateless/src/shared/index.ts",
    "templateFile": "src/templates/shared/index.ts.hbs",
    "type": "add",
  },
]
`);
  });
});
