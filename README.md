# Example app with gRPC in React

This app communicates with the Kotlin backend, which can be found [here](https://github.com/strmprivacy/demo-grpc-kotlin).

Because of CORS, and the Java backend not supporting OPTIONS requests, we have a separate envoy proxy, which handles CORS.

# Compiling the proto to JavaScript
To compile the proto definition to JavaScript code and Typescript definitions, run: `./proto/compile.sh`.

# Running Envoy
We have a docker configuration, which can be built and run with: `./envoy/run.sh`.

# Run the App
The app is built with Create React App and uses WebPack. You can run the app with: `npm run start`.
