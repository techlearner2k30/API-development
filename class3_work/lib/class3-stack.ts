import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as appsync from '@aws-cdk/aws-appsync-alpha';


export class class3AppSync extends cdk.Stack{
    constructor( scope:Construct, id:string, props?:cdk.StackProps ){
        super(scope,id,props);

        const appSyncAPI = new appsync.GraphqlApi(this,'api',{
            name: 'graphql_test_api',
            schema: appsync.Schema.fromAsset('schema/schema.graphql')
        });
    
        const lambdaFnAppSync = new cdk.aws_lambda.Function( this , 'lambdaAppSync' , {
            functionName : 'lambdaAppSync',
            runtime : cdk.aws_lambda.Runtime.NODEJS_16_X,
            code : cdk.aws_lambda.Code.fromAsset('lambda'),
            handler : 'index.handler'
        })

        // schema is defined but from where to have the data
        // Now lets define data sourse 
        // data source can be from dynamodb or any where
        // we are using aws lambda for now

        const dataSource = appSyncAPI.addLambdaDataSource('ds',lambdaFnAppSync); 

        dataSource.createResolver({
            typeName : "Mutation",
            fieldName : 'addTodo'
        });

        dataSource.createResolver({
            typeName : "Query",
            fieldName : 'getTodos'
        });

        dataSource.createResolver({
            typeName : "Mutation",
            fieldName : 'updateTodo'
        });


    }
}

