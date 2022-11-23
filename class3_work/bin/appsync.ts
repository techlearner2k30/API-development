#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
//import { AppsyncStack } from '../New folder/lib/appsync-stack';
import { class3AppSync } from '../lib/class3-stack';

const app = new cdk.App();
new class3AppSync(app,'class3AppSync',{
    
}); 