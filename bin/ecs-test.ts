#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { EcsTestStack } from '../lib/ecs-test-stack';

const app = new cdk.App();
new EcsTestStack(app, 'EcsTestStack');
