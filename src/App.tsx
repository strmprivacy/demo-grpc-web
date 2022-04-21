import React, { useState } from 'react';
import './App.css';
import { GrpcDemoServicePromiseClient } from './proto_gen/proto/grpc-demo_v1_grpc_web_pb';
import { HelloWorldRequest } from "./proto_gen/proto/grpc-demo_v1_pb";

const client = new GrpcDemoServicePromiseClient('http://localhost:8080');

export const App = () => {

    const [userName, setUserName] = useState<string>('Robin');
    const [result, setResult] = useState<string>('');

    const invokeRpc = () => {
        const req = new HelloWorldRequest();
        req.setName(userName);
        client.helloWorld(req).then(res => {
            setResult(res.toObject().message);
        }, err => {
            console.log('error', err)
            setResult(err)
        })
    }

    return (
        <div id="app">
            <header>
                <p>
                    gRPC-Web demo
                </p>
            </header>
            <main>
                <div className="input-group">
                    <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)}/>
                    <button onClick={() => invokeRpc()}>Invoke RPC</button>
                </div>
                <p>{result}</p>
            </main>
        </div>
    );
};
