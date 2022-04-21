#!/bin/bash
mkdir -p src/proto_gen
rm -rf src/proto_gen/*
protoc -I=. proto/grpc-demo_v1.proto \
  --js_out=import_style=commonjs:src/proto_gen \
  --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:src/proto_gen
