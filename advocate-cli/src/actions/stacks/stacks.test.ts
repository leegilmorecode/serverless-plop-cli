import { stacksActions } from './stacks';

const cdkFolderPath = 'customer-service';

describe('shared', () => {
  it('should return the correct object', () => {
    expect(stacksActions(cdkFolderPath)).toMatchInlineSnapshot(`
[
  {
    "data": {
      "cdkFolderPath": "customer-service",
    },
    "force": true,
    "path": "../customer-service/lib/",
    "type": "delete lib folder",
  },
  {
    "data": {
      "cdkFolderPath": "customer-service",
    },
    "force": true,
    "path": "../customer-service/bin/customer-service.ts",
    "templateFile": "src/templates/bin/bin.template.ts.hbs",
    "type": "add",
  },
  {
    "data": {
      "cdkFolderPath": "customer-service",
    },
    "path": "../customer-service/stateless/stateless.ts",
    "skipIfExists": true,
    "templateFile": "src/templates/stacks/stateless.ts.hbs",
    "type": "add",
  },
  {
    "data": {
      "cdkFolderPath": "customer-service",
    },
    "path": "../customer-service/stateful/stateful.ts",
    "skipIfExists": true,
    "templateFile": "src/templates/stacks/stateful.ts.hbs",
    "type": "add",
  },
]
`);
  });
});
