FROM public.ecr.aws/lambda/java:21

COPY build/classes/java/main ${LAMBDA_TASK_ROOT}

CMD [ "com.ian4d.example.ExampleHandler::handleRequest" ]