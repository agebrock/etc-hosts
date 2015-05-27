#etc-hosts for simple "etc/hosts" management.

Adds a js controlled section to your etc/hosts file. 
Common usecase is to autosetup some hostnames in situations a DNS does not fit.


```js
var etcHosts = require('etc-hosts');
var hosts = [{ip:'192.168.33.2',names:['dev.box']}];
etcHosts.write(hosts);
```


```sh
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##

127.0.0.1	localhost
255.255.255.255	broadcasthost
::1             localhost
fe80::1%lo0	localhost


##the section below is manged by etc-hosts
#box:start
172.17.0.18 4e9c501ba7d8
172.17.0.12 8b40e285bf38
172.17.0.11 09e4ddb124ec
172.17.0.10 c3702209342e
172.17.0.8 4e1802affe5c
#box:end
```

