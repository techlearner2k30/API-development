"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class3AppSync = void 0;
const cdk = require("aws-cdk-lib");
// import * as sqs from 'aws-cdk-lib/aws-sqs';
const appsync = require("@aws-cdk/aws-appsync-alpha");
class class3AppSync extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const appSyncAPI = new appsync.GraphqlApi(this, 'api', {
            name: 'graphql_test_api',
            schema: appsync.Schema.fromAsset('schema/schema.graphql')
        });
        const lambdaFnAppSync = new cdk.aws_lambda.Function(this, 'lambdaAppSync', {
            functionName: 'lambdaAppSync',
            runtime: cdk.aws_lambda.Runtime.NODEJS_16_X,
            code: cdk.aws_lambda.Code.fromAsset('lambda'),
            handler: 'index.handler'
        });
        // schema is defined but from where to have the data
        // Now lets define data sourse 
        // data source can be from dynamodb or any where
        // we are using aws lambda for now
        const dataSource = appSyncAPI.addLambdaDataSource('ds', lambdaFnAppSync);
        dataSource.createResolver({
            typeName: "Mutation",
            fieldName: 'addTodo'
        });
        dataSource.createResolver({
            typeName: "Query",
            fieldName: 'getTodos'
        });
        dataSource.createResolver({
            typeName: "Mutation",
            fieldName: 'updateTodo'
        });
    }
}
exports.class3AppSync = class3AppSync;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MzLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xhc3MzLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUVuQyw4Q0FBOEM7QUFDOUMsc0RBQXNEO0FBR3RELE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ3hDLFlBQWEsS0FBZSxFQUFFLEVBQVMsRUFBRSxLQUFxQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFDLEVBQUUsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUV0QixNQUFNLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFDLEtBQUssRUFBQztZQUNqRCxJQUFJLEVBQUUsa0JBQWtCO1lBQ3hCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQztTQUM1RCxDQUFDLENBQUM7UUFFSCxNQUFNLGVBQWUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFFLElBQUksRUFBRyxlQUFlLEVBQUc7WUFDMUUsWUFBWSxFQUFHLGVBQWU7WUFDOUIsT0FBTyxFQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDNUMsSUFBSSxFQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFDOUMsT0FBTyxFQUFHLGVBQWU7U0FDNUIsQ0FBQyxDQUFBO1FBRUYsb0RBQW9EO1FBQ3BELCtCQUErQjtRQUMvQixnREFBZ0Q7UUFDaEQsa0NBQWtDO1FBRWxDLE1BQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUMsZUFBZSxDQUFDLENBQUM7UUFFeEUsVUFBVSxDQUFDLGNBQWMsQ0FBQztZQUN0QixRQUFRLEVBQUcsVUFBVTtZQUNyQixTQUFTLEVBQUcsU0FBUztTQUN4QixDQUFDLENBQUM7UUFFSCxVQUFVLENBQUMsY0FBYyxDQUFDO1lBQ3RCLFFBQVEsRUFBRyxPQUFPO1lBQ2xCLFNBQVMsRUFBRyxVQUFVO1NBQ3pCLENBQUMsQ0FBQztRQUVILFVBQVUsQ0FBQyxjQUFjLENBQUM7WUFDdEIsUUFBUSxFQUFHLFVBQVU7WUFDckIsU0FBUyxFQUFHLFlBQVk7U0FDM0IsQ0FBQyxDQUFDO0lBR1AsQ0FBQztDQUNKO0FBeENELHNDQXdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XHJcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xyXG4vLyBpbXBvcnQgKiBhcyBzcXMgZnJvbSAnYXdzLWNkay1saWIvYXdzLXNxcyc7XHJcbmltcG9ydCAqIGFzIGFwcHN5bmMgZnJvbSAnQGF3cy1jZGsvYXdzLWFwcHN5bmMtYWxwaGEnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBjbGFzczNBcHBTeW5jIGV4dGVuZHMgY2RrLlN0YWNre1xyXG4gICAgY29uc3RydWN0b3IoIHNjb3BlOkNvbnN0cnVjdCwgaWQ6c3RyaW5nLCBwcm9wcz86Y2RrLlN0YWNrUHJvcHMgKXtcclxuICAgICAgICBzdXBlcihzY29wZSxpZCxwcm9wcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFwcFN5bmNBUEkgPSBuZXcgYXBwc3luYy5HcmFwaHFsQXBpKHRoaXMsJ2FwaScse1xyXG4gICAgICAgICAgICBuYW1lOiAnZ3JhcGhxbF90ZXN0X2FwaScsXHJcbiAgICAgICAgICAgIHNjaGVtYTogYXBwc3luYy5TY2hlbWEuZnJvbUFzc2V0KCdzY2hlbWEvc2NoZW1hLmdyYXBocWwnKVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbGFtYmRhRm5BcHBTeW5jID0gbmV3IGNkay5hd3NfbGFtYmRhLkZ1bmN0aW9uKCB0aGlzICwgJ2xhbWJkYUFwcFN5bmMnICwge1xyXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWUgOiAnbGFtYmRhQXBwU3luYycsXHJcbiAgICAgICAgICAgIHJ1bnRpbWUgOiBjZGsuYXdzX2xhbWJkYS5SdW50aW1lLk5PREVKU18xNl9YLFxyXG4gICAgICAgICAgICBjb2RlIDogY2RrLmF3c19sYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xhbWJkYScpLFxyXG4gICAgICAgICAgICBoYW5kbGVyIDogJ2luZGV4LmhhbmRsZXInXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gc2NoZW1hIGlzIGRlZmluZWQgYnV0IGZyb20gd2hlcmUgdG8gaGF2ZSB0aGUgZGF0YVxyXG4gICAgICAgIC8vIE5vdyBsZXRzIGRlZmluZSBkYXRhIHNvdXJzZSBcclxuICAgICAgICAvLyBkYXRhIHNvdXJjZSBjYW4gYmUgZnJvbSBkeW5hbW9kYiBvciBhbnkgd2hlcmVcclxuICAgICAgICAvLyB3ZSBhcmUgdXNpbmcgYXdzIGxhbWJkYSBmb3Igbm93XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBhcHBTeW5jQVBJLmFkZExhbWJkYURhdGFTb3VyY2UoJ2RzJyxsYW1iZGFGbkFwcFN5bmMpOyBcclxuXHJcbiAgICAgICAgZGF0YVNvdXJjZS5jcmVhdGVSZXNvbHZlcih7XHJcbiAgICAgICAgICAgIHR5cGVOYW1lIDogXCJNdXRhdGlvblwiLFxyXG4gICAgICAgICAgICBmaWVsZE5hbWUgOiAnYWRkVG9kbydcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZGF0YVNvdXJjZS5jcmVhdGVSZXNvbHZlcih7XHJcbiAgICAgICAgICAgIHR5cGVOYW1lIDogXCJRdWVyeVwiLFxyXG4gICAgICAgICAgICBmaWVsZE5hbWUgOiAnZ2V0VG9kb3MnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRhdGFTb3VyY2UuY3JlYXRlUmVzb2x2ZXIoe1xyXG4gICAgICAgICAgICB0eXBlTmFtZSA6IFwiTXV0YXRpb25cIixcclxuICAgICAgICAgICAgZmllbGROYW1lIDogJ3VwZGF0ZVRvZG8nXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxufVxyXG5cclxuIl19