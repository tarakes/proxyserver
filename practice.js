let str=`GET http://www.google.com/ HTTP/1.1
Host: www.google.com
Proxy-Connection: keep-alive
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53     
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9
Cookie: SID=OgiKBEECaAZCGTQVDCYnwL-DuW2LubXn6QNCH0PjVb6BtW5BKmwv4POaLj55KhFxySdcOA.; HSID=AlYggEWouarxg5WVU; APISID=nOTTpV8h1tYL0fwo/AFxBXmMwQOrBYH_GI; SIDCC=AEf-XMQtFydJTnbcLWhFCqPmJHiNKtn0vIayfj-_S4WLQHaxf5cOjo8r0183serv8uZrJJEp`;
let  p=`CONNECT www.google.com:443 HTTP/1.1
Host: www.google.com:443
Proxy-Connection: keep-alive
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/`;
let x=p.split("\n");
console.log(x[0].split(" ")[1].split(":")[0]);