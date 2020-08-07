const { HelloRequest } = require("../proto/helloworld_pb.js")
const { GreeterPromiseClient } = require("../proto/helloworld_grpc_web_pb.js")

;(async () => {
  try {
    const greeterService = new GreeterPromiseClient('http://localhost:8080')
    const request = new HelloRequest()
    request.setMessage("Hello")

    const response = await greeterService.sayHello(request, {})
    console.log(response.getMessage())
  } catch (err) {
    console.log(err.code)
    console.log(err.message)
  }
})()