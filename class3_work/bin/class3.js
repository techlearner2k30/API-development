#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("aws-cdk-lib");
//import { AppsyncStack } from '../New folder/lib/appsync-stack';
const class3_stack_1 = require("../lib/class3-stack");
const app = new cdk.App();
new class3_stack_1.class3AppSync(app, 'class3AppSync', {});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xhc3MzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFxQztBQUNyQyxtQ0FBbUM7QUFDbkMsaUVBQWlFO0FBQ2pFLHNEQUFvRDtBQUVwRCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixJQUFJLDRCQUFhLENBQUMsR0FBRyxFQUFDLGVBQWUsRUFBQyxFQUVyQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXHJcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcclxuaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcclxuLy9pbXBvcnQgeyBBcHBzeW5jU3RhY2sgfSBmcm9tICcuLi9OZXcgZm9sZGVyL2xpYi9hcHBzeW5jLXN0YWNrJztcclxuaW1wb3J0IHsgY2xhc3MzQXBwU3luYyB9IGZyb20gJy4uL2xpYi9jbGFzczMtc3RhY2snO1xyXG5cclxuY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcclxubmV3IGNsYXNzM0FwcFN5bmMoYXBwLCdjbGFzczNBcHBTeW5jJyx7XHJcbiAgICBcclxufSk7ICJdfQ==