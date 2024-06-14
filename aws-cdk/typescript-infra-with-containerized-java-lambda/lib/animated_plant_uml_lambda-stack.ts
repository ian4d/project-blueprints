import * as cdk from 'aws-cdk-lib';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AnimatedPlantUmlLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const lambda: Function = new Function(this, 'lambda', {
      code: Code.fromAsset("./java/", {
        bundling: {
          image: Runtime.JAVA_21.bundlingImage,
          command: [
            'bash',
            '-c',
            'cp /asset-input/build/libs/ExampleLambda.jar /asset-output/'
          ],
          outputType: cdk.BundlingOutput.ARCHIVED
        }
      }),
      handler: 'com.ian4d.example.ExampleHandler::handleRequest',
      runtime: Runtime.JAVA_21,
    });
  }
}
