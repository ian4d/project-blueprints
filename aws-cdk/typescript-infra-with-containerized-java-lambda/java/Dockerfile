FROM public.ecr.aws/lambda/java:21

COPY build/classes/java/main ${LAMBDA_TASK_ROOT}

# Uncomment this if you have dependencies you need to copy over, requires build script change too
# Refer to Usage tab here: https://gallery.ecr.aws/lambda/java

# COPY build/dependency/* ${LAMBDA_TASK_ROOT}/lib

CMD [ "com.ian4d.example.ExampleHandler::handleRequest" ]