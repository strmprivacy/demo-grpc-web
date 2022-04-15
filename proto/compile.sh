rm -rf ../src/proto_gen/*
protoc -I=. *.proto \
  --js_out=import_style=commonjs:../src/proto_gen \
  --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:../src/proto_gen
