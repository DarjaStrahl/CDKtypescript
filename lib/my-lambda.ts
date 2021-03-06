import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as path from 'path';



export class CdkStarterStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // 👇 lambda function definition
        const lambdaFunction = new lambda.Function(this, 'lambda-function', {
            runtime: lambda.Runtime.NODEJS_14_X,
            memorySize: 1024,
            timeout: cdk.Duration.seconds(5),
            handler: 'index.handler',
            code: lambda.Code.fromAsset(path.join(__dirname, '/../src')),
            environment: {
                REGION: cdk.Stack.of(this).region,
                AVAILABILITY_ZONES: JSON.stringify(
                    cdk.Stack.of(this).availabilityZones,
                ),
            },
        });
    }
}
