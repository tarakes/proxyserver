
# Forward Proxy

Proxy server made using Node Js.
When if client  send a HTTP CONNECT(with TLS) request to proxy,it makes a nearly TCP connection with the remote server and create a TUNNEL.
After making connection it send acknowldegement to client.All packets are bypassed via proxy server.

## Acknowledgements

 - [HTTP connect by Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT)
 - [Stack Overflow](https://stackoverflow.com/questions/11697943/when-should-one-use-connect-and-get-http-methods-at-http-proxy-server)


## Run Locally

Clone the project

```bash
  git clone https://github.com/tarakes/proxyserver.git
```

Go to the project directory

```bash
  cd proxyserver
```

Install dependencies

```bash
  npm install
```
Set Proxy in settings

```bash
  address: 127.0.0.1  port:3000
```

Start the server

```bash
  npm run start
```


## FAQ

#### Port is already in used,what to do?

Use some another port which is not in use currently.

