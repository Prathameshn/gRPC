/*
 *
 * Copyright 2015 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

var PROTO_PATH = __dirname + '/_helloworld.proto';

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

// function main() {
//   var client = new hello_proto.Greeter('localhost:50051',
//                                        grpc.credentials.createInsecure());
//   var user;
//   if (process.argv.length >= 3) {
//     user = process.argv[2];
//   } else {
//     user = 'world';
//   }
//   client.sayHello({ name: user }, function (err, response) {
//     console.log('Greeting:', response.message);
//   });

//   client.sayHelloAgain({ name: user }, function (err, response) {
//     console.log('Greeting:', response.message);
//   });
// }
function main() {
  var user,sequenceNumber=[];
  if (process.argv.length >= 3) {
    user = process.argv[2];
  } else {
    user = 'world';
  }
  var client = new hello_proto.GreeterService('176.9.19.82:4293',grpc.credentials.createInsecure());
  //1 less than sec
  //10 less than sec
  //100 less than sec
  //1000 1 sec
  //10000 4 sec
  //100000 38 sec
  //1000000
  // let i=100000
  // sequenceNumber = { "SensorData": { "Seq": 1001, "PatchId": "1AX02", "Accel": [7, 0, 900, 2340, 15952, 904, 2348, 15960, 892, 2344, 15952, 900, 2344, 15940, 900, 2344, 15952, 896, 2348, 15952, 896, 2348, 15968, 904, 2340, 15948, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Respiration": [-8388608, -8388608, -8388608, -8388608, -8388608], "vBat": 2614, "IAGain": 0, "LeadStatus": 65535, "RLDInformation": 0, "Temperature": [21274], "TsECG": 300302336, "ECG0": [-524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288], "ECG1": [-524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288, -524288], "HR": [-3, -3, -3, -3, -3], "RR_OUT": [-2, -2, -2, -2, -2], "TEMP_CODE_PER_DEG": 100, "ACCEL_OUT_X": [900, 904, 892, 900, 900, 896, 896], "ACCEL_OUT_Y": [2340, 2348, 2344, 2344, 2344, 2348, 2348], "ACCEL_OUT_Z": [15952, 15960, 15952, 15940, 15952, 15952, 15968] } }
  // sequenceNumber = JSON.stringify(sequenceNumber)
  // console.log(new Date() + "")
  // do{
  //   client.sendSequenceNumber({ sequenceNumber: sequenceNumber}, function (err, response) {
  //     console.log('Get:', response.sequenceNumberMessage);
  //   });
  //   i=i-1
  // }while(i>0)
  // client.sayHello({ name: user, sequenceNumber: sequenceNumber }, function (err, response) {
  //   console.log('Greeting:', response.message);
  // });
  // client.sayHelloAgain({ name: user, sequenceNumber: sequenceNumber }, function (err, response) {
  //   console.log('Greeting:', response.message);
  // });

  for(i=0;i<5;i++){

    client.IngestData({ Seq: "123", PatchId: "Prathmesh" }, function (err, response) {
      console.log('Greeting:', response);
    });
  }
}
main();
