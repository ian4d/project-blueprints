"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimatedPlantUmlLambdaStack = void 0;
const cdk = require("aws-cdk-lib");
const aws_lambda_1 = require("aws-cdk-lib/aws-lambda");
// import * as sqs from 'aws-cdk-lib/aws-sqs';
class AnimatedPlantUmlLambdaStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // The code that defines your stack goes here
        // example resource
        // const queue = new sqs.Queue(this, 'AnimatedPlantUmlLambdaQueue', {
        //   visibilityTimeout: cdk.Duration.seconds(300)
        // });
        const lambda = new aws_lambda_1.Function(this, 'lambda', {
            code: aws_lambda_1.Code.fromAsset("./java/", {
                bundling: {
                    image: aws_lambda_1.Runtime.JAVA_21.bundlingImage,
                    command: [
                        'bash',
                        '-c',
                        'cp /asset-input/build/libs/ExampleLambda.jar /asset-output/'
                    ],
                    outputType: cdk.BundlingOutput.ARCHIVED
                }
            }),
            handler: 'com.ian4d.example.ExampleHandler::handleRequest',
            runtime: aws_lambda_1.Runtime.JAVA_21,
        });
    }
}
exports.AnimatedPlantUmlLambdaStack = AnimatedPlantUmlLambdaStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0ZWRfcGxhbnRfdW1sX2xhbWJkYS1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuaW1hdGVkX3BsYW50X3VtbF9sYW1iZGEtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQW1DO0FBQ25DLHVEQUFpRTtBQUVqRSw4Q0FBOEM7QUFFOUMsTUFBYSwyQkFBNEIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUN4RCxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLDZDQUE2QztRQUU3QyxtQkFBbUI7UUFDbkIscUVBQXFFO1FBQ3JFLGlEQUFpRDtRQUNqRCxNQUFNO1FBRU4sTUFBTSxNQUFNLEdBQWEsSUFBSSxxQkFBUSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7WUFDcEQsSUFBSSxFQUFFLGlCQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtnQkFDOUIsUUFBUSxFQUFFO29CQUNSLEtBQUssRUFBRSxvQkFBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhO29CQUNwQyxPQUFPLEVBQUU7d0JBQ1AsTUFBTTt3QkFDTixJQUFJO3dCQUNKLDZEQUE2RDtxQkFDOUQ7b0JBQ0QsVUFBVSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUTtpQkFDeEM7YUFDRixDQUFDO1lBQ0YsT0FBTyxFQUFFLGlEQUFpRDtZQUMxRCxPQUFPLEVBQUUsb0JBQU8sQ0FBQyxPQUFPO1NBRXZCLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDRjtBQTVCRCxrRUE0QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29kZSwgRnVuY3Rpb24sIFJ1bnRpbWUgfSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuLy8gaW1wb3J0ICogYXMgc3FzIGZyb20gJ2F3cy1jZGstbGliL2F3cy1zcXMnO1xuXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRQbGFudFVtbExhbWJkYVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgLy8gVGhlIGNvZGUgdGhhdCBkZWZpbmVzIHlvdXIgc3RhY2sgZ29lcyBoZXJlXG5cbiAgICAvLyBleGFtcGxlIHJlc291cmNlXG4gICAgLy8gY29uc3QgcXVldWUgPSBuZXcgc3FzLlF1ZXVlKHRoaXMsICdBbmltYXRlZFBsYW50VW1sTGFtYmRhUXVldWUnLCB7XG4gICAgLy8gICB2aXNpYmlsaXR5VGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMzAwKVxuICAgIC8vIH0pO1xuXG4gICAgY29uc3QgbGFtYmRhOiBGdW5jdGlvbiA9IG5ldyBGdW5jdGlvbih0aGlzLCAnbGFtYmRhJywge1xuICAgICAgY29kZTogQ29kZS5mcm9tQXNzZXQoXCIuL2phdmEvXCIsIHtcbiAgICAgICAgYnVuZGxpbmc6IHtcbiAgICAgICAgICBpbWFnZTogUnVudGltZS5KQVZBXzIxLmJ1bmRsaW5nSW1hZ2UsXG4gICAgICAgICAgY29tbWFuZDogW1xuICAgICAgICAgICAgJ2Jhc2gnLFxuICAgICAgICAgICAgJy1jJyxcbiAgICAgICAgICAgICdjcCAvYXNzZXQtaW5wdXQvYnVpbGQvbGlicy9FeGFtcGxlTGFtYmRhLmphciAvYXNzZXQtb3V0cHV0LydcbiAgICAgICAgICBdLFxuICAgICAgICAgIG91dHB1dFR5cGU6IGNkay5CdW5kbGluZ091dHB1dC5BUkNISVZFRFxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGhhbmRsZXI6ICdjb20uaWFuNGQuZXhhbXBsZS5FeGFtcGxlSGFuZGxlcjo6aGFuZGxlUmVxdWVzdCcsXG4gICAgICBydW50aW1lOiBSdW50aW1lLkpBVkFfMjEsXG5cbiAgICAgIH0pO1xuICB9XG59XG4iXX0=