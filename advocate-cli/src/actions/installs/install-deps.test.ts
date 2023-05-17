import { installDepsActions } from './install-deps';

describe('install-deps', () => {
  it('should run the correct action', () => {
    expect(installDepsActions()).toMatchInlineSnapshot(`
[
  {
    "type": "install deps",
  },
]
`);
  });
});
