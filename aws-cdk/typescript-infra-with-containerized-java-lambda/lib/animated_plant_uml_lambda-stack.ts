import * as cdk from 'aws-cdk-lib';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AnimatedPlantUmlLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AnimatedPlantUmlLambdaQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const lambda: Function = new Function(this, 'lambda', {
      code: Code.fromAsset("./java", {
        bundling: {
          image: Runtime.JAVA_21.bundlingImage,
          command: [
            'bash',
            '-c',
            './gradlew build',
            'cp /asset-input/build/classes/ /asset-output/'
          ]
        }
      }),
      handler: 'com.ian4d.plantuml.SequenceHandler::handleRequest',
      runtime: Runtime.JAVA_21
    });
  }
}
