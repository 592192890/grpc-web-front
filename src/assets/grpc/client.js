/**
 *
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

const {EchoRequest,
  ServerStreamingEchoRequest} = require('../../../echo_pb.js');
const {EchoServiceClient,EchoServicePromiseClient} = require('../../../echo_grpc_web_pb.js');
const grpc = {};
grpc.web = require('grpc-web');

// 事件监听的Client
// var echoService = new EchoServiceClient('http://'+window.location.hostname+':8080', null, null);
// promise的Client, 但stream不支持then
var echoPromiseService =new EchoServicePromiseClient('http://'+window.location.hostname+':8080', null, null);

exports.echoPromiseService=echoPromiseService;
exports.EchoRequest=EchoRequest;
exports.ServerStreamingEchoRequest=ServerStreamingEchoRequest;
// exports.echoService=echoService;

