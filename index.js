const net = require('net');
const server = net.createServer((client) => {
    client.once('data', (data) => {
        let ob = data.toString();
        let x = ob.split("\n");
        let isSecured = (x[0].split(" ")[0] === "CONNECT");
        let portNum = isSecured ? 443 : 80;
        let remoteHost = x[0].split(" ")[1];
       
        if (isSecured) {
            remoteHost = remoteHost.split(":")[0];
        }
        console.log(remoteHost);
        let remoteConnection = net.createConnection({
            host: remoteHost,
            port: portNum
        }, () => {
         //   console.log('remote server connected');
        })
        if (isSecured)
            client.write("HTTP/1.1 200 OK\r\n\n");
        else
            remoteConnection.write(data);
        client.pipe(remoteConnection);
        remoteConnection.pipe(client);
        client.on('error', () => {
            console.log('client connection error');
        })
        remoteConnection.on('error', () => {
            console.log("error during remote connection");
        })
    })
    client.on('end', function () {
        //  console.log('Client disconnected');
    });

})
server.listen(process.env.PORT || 3000, () => {
    console.log('server is listeng..');
})