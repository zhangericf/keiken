# Hands on networking in linux
### 1. ssh exercice with generation of application Key and deployment on the sharedkeys (manipulate .ssh/conf - add a proxycommand

To generate a ssh key
```bash
ssh-keygen -t rsa -b 4096
```

Copy it on the remote machine
```bash
ssh-copy-id remote_username@remote_address_ip
```

To connect with ssh passwordless
```bash
ssh -i ~/.ssh/id_rsa remote_username@remote_address_ip
```

![Alt text](image-1.png)

### 2. Exercice of changing network interface init scripts : disable DHCP, change the DN, change the domain resolution order, change the IP manually, …

![Alt text](image.png)

### 3. Install and use Bind, Exercices around Views (Internal & External views).

Install bind
```bash
sudo apt-get install bind9
```

### 4. Create and deploy a selfsigned certificate

Start with generating a private key
```bash
openssl genpkey -algorithm RSA -out private.key
```
![Alt text](image-2.png)

Then create a Certificate Signing Request with the private key
```bash
openssl req -new -key private.key -out certificate.csr
```
![Alt text](image-3.png)

Next sign the CSR to get a signed certificate
```bash
openssl x509 -req -days 365 -in certificate.csr -signkey private.key -out certificate.crt
```
![Alt text](image-4.png)

And to deploy these certificate, you have to move then in the corresponding folder of your web server software (Apache , Nginx)

```bash
sudo mv private.key /etc/ssl/private/
sudo mv certificate.crt /etc/ssl/certs/
```

Finally configure your web server to specify where the ssl files are.