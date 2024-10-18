import { Stage } from 'types';
import { RemovalPolicy } from 'aws-cdk-lib';

export function getStage(stage: string): string {
  switch (stage) {
    case Stage.prod:
      return Stage.prod;
    case Stage.staging:
      return Stage.staging;
    case Stage.test:
      return Stage.test;
    default:
      return stage; // return the ephemeral environment if not known (i.e. pr-123)
  }
}

export function getRemovalPolicyFromStage(stage: string): RemovalPolicy {
  if (stage !== Stage.prod && stage !== Stage.staging) {
    return RemovalPolicy.DESTROY;
  }

  return RemovalPolicy.RETAIN;
}