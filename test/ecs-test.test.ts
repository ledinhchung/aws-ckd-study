import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import '@aws-cdk/assert/jest';
import * as cdk from '@aws-cdk/core';

import EcsTest = require('../lib/ecs-test-stack');

const app = new cdk.App();
// WHEN
const stack = new EcsTest.EcsTestStack(app, 'MyTestStack');

test('Network setting', () => {
  // THEN
  expect(stack).toHaveResource('AWS::EC2::VPC', {
    CidrBlock: '172.10.0.0/24'
  })
});

test('ECS cluster', () => {
  // THEN
  expect(stack).toHaveResource('AWS::ECS::Cluster', {
    ClusterName: 'EcsCluster'
  })
})

test('Task definition', () => {
  expect(stack).toHaveResource('AWS::ECS::TaskDefinition', {
    Cpu: '256',
    Memory: '512',
  })
})
