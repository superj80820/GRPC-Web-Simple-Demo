#! /bin/bash

docker run -v `pwd`:/defs namely/gen-grpc-gateway -f proto/helloworld.proto -s Service

mv gen/grpc-gateway/src/gen/pb-go/helloworld.pb.go ./proto

rm -r gen