#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("aws-cdk-lib");
//import { AppsyncStack } from '../New folder/lib/appsync-stack';
const class3_stack_1 = require("../lib/class3-stack");
const app = new cdk.App();
new class3_stack_1.class3AppSync(app, 'class3AppSync', {});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwc3luYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcHN5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdUNBQXFDO0FBQ3JDLG1DQUFtQztBQUNuQyxpRUFBaUU7QUFDakUsc0RBQW9EO0FBRXBELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFCLElBQUksNEJBQWEsQ0FBQyxHQUFHLEVBQUMsZUFBZSxFQUFDLEVBRXJDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcclxuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xyXG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xyXG4vL2ltcG9ydCB7IEFwcHN5bmNTdGFjayB9IGZyb20gJy4uL05ldyBmb2xkZXIvbGliL2FwcHN5bmMtc3RhY2snO1xyXG5pbXBvcnQgeyBjbGFzczNBcHBTeW5jIH0gZnJvbSAnLi4vbGliL2NsYXNzMy1zdGFjayc7XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xyXG5uZXcgY2xhc3MzQXBwU3luYyhhcHAsJ2NsYXNzM0FwcFN5bmMnLHtcclxuICAgIFxyXG59KTsgIl19