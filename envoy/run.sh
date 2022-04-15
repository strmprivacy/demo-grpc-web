docker build -t grpcweb/envoy -f Dockerfile .

docker run -d -p 8080:8080 grpcweb/envoy
