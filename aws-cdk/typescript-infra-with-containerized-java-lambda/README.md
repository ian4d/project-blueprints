# AWS CDK TypeScript Stack with Dockerized Java Lambda Handler
The stack in this sample project contains a single Lambda function written in Java. The infrastructure that deploys the stack is written in TypeScript.

## Technologies 
This template uses the following technologies:
- AWS CDK v2 in TypeScript: Used to define the infrastructure in this service.
- Java 21: Used to implement the Lambda function deployed by this service.
- Gradle 8.7: Used to build the Lambda and manage its dependencies.
- Docker: The root of this example has a Docker compose configuration file and the Lambda function has its own Dockerfile to manage deployments and testing.

# Local Development
## Useful Commands
### Building the Source
* `npm run build`   Compiles our typescript to JS and also builds the Java function
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests

### Running Locally
#### Container Only
* `docker build --no-cache -t lambda ./java/` Builds the docker image for our lambda function. Make sure to build with gradle in the java directory first.
* `docker run -p 9000:8080 lambda:latest` Runs the lambda container built in the previous state.

#### Application
* `docker compose up --build`: Builds and starts the lambda container

### Test Requests
* `curl "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{"payload":"hello world!"}'` Sends a test request to the running lambda function after starting the container using the previous command.

### Deploying to AWS
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
