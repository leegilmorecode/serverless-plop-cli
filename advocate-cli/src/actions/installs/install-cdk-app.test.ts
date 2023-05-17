import { installCdkAppActions } from './install-cdk-app';

describe('install-cdk-app', () => {
  it('should run the correct action', () => {
    expect(installCdkAppActions()).toMatchInlineSnapshot(`
[
  {
    "type": "create the cdk app",
  },
]
`);
  });
});
