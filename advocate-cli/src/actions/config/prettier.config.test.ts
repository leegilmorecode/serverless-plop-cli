import { prettierActions } from './prettier.config';

const cdkFolderPath = 'customer-service';

describe('prettier-config', () => {
  it('should return the correct object', () => {
    expect(prettierActions(cdkFolderPath)).toMatchInlineSnapshot(`
[
  {
    "force": true,
    "path": "../customer-service/.prettierrc",
    "templateFile": "src/templates/.prettierrc.hbs",
    "type": "add",
  },
  {
    "force": true,
    "path": "../customer-service/.prettierignore",
    "templateFile": "src/templates/.prettierignore.hbs",
    "type": "add",
  },
]
`);
  });
});
