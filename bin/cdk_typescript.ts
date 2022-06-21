#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from "@aws-cdk/core";
import { CdkStarterStack } from '../lib/my-lambda';

const app = new cdk.App();
new CdkStarterStack(app, 'MyLambdatStack', {
  env: { account: '332196678513', region: 'eu-central-1' },
});
