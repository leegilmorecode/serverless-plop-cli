import { typesActions } from './types';

const cdkFolderPath = 'customer-service';

describe('types', () => {
  it('should return the correct object', () => {
    expect(typesActions(cdkFolderPath)).toMatchInlineSnapshot(`
[
  {
    "force": true,
    "path": "../customer-service/types/stage.ts",
    "templateFile": "src/templates/types/stage.ts.hbs",
    "type": "add",
  },
  {
    "force": true,
    "path": "../customer-service/types/index.ts",
    "templateFile": "src/templates/types/index.ts.hbs",
    "type": "add",
  },
]
`);
  });
});
