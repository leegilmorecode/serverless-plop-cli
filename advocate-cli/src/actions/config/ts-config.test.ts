import { tsConfigActions } from './ts-config';

const cdkFolderPath = 'customer-service';

describe('ts-config', () => {
  it('should return the correct object', () => {
    expect(tsConfigActions(cdkFolderPath)).toMatchInlineSnapshot(`
[
  {
    "force": true,
    "path": "../customer-service/tsconfig.json",
    "templateFile": "src/templates/tsconfig.json.hbs",
    "type": "add",
  },
]
`);
  });
});
