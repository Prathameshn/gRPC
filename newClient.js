
var PROTO_PATH = __dirname + '/medicalDetails.proto';

var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var hello_proto = grpc.loadPackageDefinition(packageDefinition);

function main() {
  var user,sequenceNumber=[];
  if (process.argv.length >= 3) {
    user = process.argv[2];
  } else {
    user = 'world';
  }
  var client = new hello_proto.MedicalDetailsService('localhost:50051',grpc.credentials.createInsecure());

  client.getMedicalDetails({ platformPartner : "5ee102d51fd0597629bb4b16"}, function (err, response) {
    console.log(response);
  });
}
main();
