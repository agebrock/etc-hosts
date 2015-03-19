#etc-hosts for simple "etc/hosts" management.

Adds a js controlled section to your etc/hosts file. 
Common usecase is to autosetup some hostnames in situations a DNS does not fit.


```js
var etcHosts = requir('etc-hosts');
var hosts = [{ip:'192.168.33.2',names:['dev.box']}];
etcHosts.write(hosts);
```
