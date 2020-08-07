#! /bin/bash

docker run \
    -v "${PWD}/proto:/protofile" \
    -e "protofile=helloworld.proto" \
    juanjodiaz/grpc-web-generator

mv ./proto/generated/* ./proto

rm -r proto/generated