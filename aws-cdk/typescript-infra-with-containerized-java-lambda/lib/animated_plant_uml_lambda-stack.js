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
            code: aws_lambda_1.Code.fromAsset("./java", {
                bundling: {
                    image: aws_lambda_1.Runtime.JAVA_21.bundlingImage,
                    command: [
                        'bash',
                        '-c',
                        './gradlew build',
                        'cp /asset-input/build/classes/ /asset-output/'
                    ]
                }
            }),
            handler: 'com.ian4d.plantuml.SequenceHandler::handleRequest',
            runtime: aws_lambda_1.Runtime.JAVA_21
        });
    }
}
exports.AnimatedPlantUmlLambdaStack = AnimatedPlantUmlLambdaStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0ZWRfcGxhbnRfdW1sX2xhbWJkYS1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuaW1hdGVkX3BsYW50X3VtbF9sYW1iZGEtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQW1DO0FBQ25DLHVEQUFpRTtBQUVqRSw4Q0FBOEM7QUFFOUMsTUFBYSwyQkFBNEIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUN4RCxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLDZDQUE2QztRQUU3QyxtQkFBbUI7UUFDbkIscUVBQXFFO1FBQ3JFLGlEQUFpRDtRQUNqRCxNQUFNO1FBRU4sTUFBTSxNQUFNLEdBQWEsSUFBSSxxQkFBUSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7WUFDcEQsSUFBSSxFQUFFLGlCQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtnQkFDN0IsUUFBUSxFQUFFO29CQUNSLEtBQUssRUFBRSxvQkFBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhO29CQUNwQyxPQUFPLEVBQUU7d0JBQ1AsTUFBTTt3QkFDTixJQUFJO3dCQUNKLGlCQUFpQjt3QkFDakIsK0NBQStDO3FCQUNoRDtpQkFDRjthQUNGLENBQUM7WUFDRixPQUFPLEVBQUUsbURBQW1EO1lBQzVELE9BQU8sRUFBRSxvQkFBTyxDQUFDLE9BQU87U0FDekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBM0JELGtFQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBDb2RlLCBGdW5jdGlvbiwgUnVudGltZSB9IGZyb20gJ2F3cy1jZGstbGliL2F3cy1sYW1iZGEnO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG4vLyBpbXBvcnQgKiBhcyBzcXMgZnJvbSAnYXdzLWNkay1saWIvYXdzLXNxcyc7XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRlZFBsYW50VW1sTGFtYmRhU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAvLyBUaGUgY29kZSB0aGF0IGRlZmluZXMgeW91ciBzdGFjayBnb2VzIGhlcmVcblxuICAgIC8vIGV4YW1wbGUgcmVzb3VyY2VcbiAgICAvLyBjb25zdCBxdWV1ZSA9IG5ldyBzcXMuUXVldWUodGhpcywgJ0FuaW1hdGVkUGxhbnRVbWxMYW1iZGFRdWV1ZScsIHtcbiAgICAvLyAgIHZpc2liaWxpdHlUaW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygzMDApXG4gICAgLy8gfSk7XG5cbiAgICBjb25zdCBsYW1iZGE6IEZ1bmN0aW9uID0gbmV3IEZ1bmN0aW9uKHRoaXMsICdsYW1iZGEnLCB7XG4gICAgICBjb2RlOiBDb2RlLmZyb21Bc3NldChcIi4vamF2YVwiLCB7XG4gICAgICAgIGJ1bmRsaW5nOiB7XG4gICAgICAgICAgaW1hZ2U6IFJ1bnRpbWUuSkFWQV8yMS5idW5kbGluZ0ltYWdlLFxuICAgICAgICAgIGNvbW1hbmQ6IFtcbiAgICAgICAgICAgICdiYXNoJyxcbiAgICAgICAgICAgICctYycsXG4gICAgICAgICAgICAnLi9ncmFkbGV3IGJ1aWxkJyxcbiAgICAgICAgICAgICdjcCAvYXNzZXQtaW5wdXQvYnVpbGQvY2xhc3Nlcy8gL2Fzc2V0LW91dHB1dC8nXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGhhbmRsZXI6ICdjb20uaWFuNGQucGxhbnR1bWwuU2VxdWVuY2VIYW5kbGVyOjpoYW5kbGVSZXF1ZXN0JyxcbiAgICAgIHJ1bnRpbWU6IFJ1bnRpbWUuSkFWQV8yMVxuICAgIH0pO1xuICB9XG59XG4iXX0=