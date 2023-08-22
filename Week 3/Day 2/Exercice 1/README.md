# Kubernetes Foundations

## 1. Install Kubernetes modules
![Alt text](screenshots/image.png)
![Alt text](screenshots/image-1.png)

## 2. Setup kubelet and log file + adding test pod
Node component that talk to the container runtime to tell when and what to run

![Alt text](screenshots/image-2.png)

## 3. Install etcd

![Alt text](screenshots/image-4.png)
https://github.com/etcd-io/etcd/releases/

## 4. Setup etcd
store state

![Alt text](screenshots/image-5.png)
![Alt text](screenshots/image-6.png)
![Alt text](screenshots/image-7.png)

## 5. Setup Kube-apiserver + log file
Server for kubernetes api
Access to ressources, Coordonates, Authorization, Authentification, Admissions, Metrix, Reports

![Alt text](screenshots/image-3.png)

## 6. Connect Kubelet to kube apiserver with kubectl

![Alt text](screenshots/image-8.png)

### 6.1 Setup kubectl config
![Alt text](screenshots/image-9.png)
![Alt text](screenshots/image-10.png)
![Alt text](screenshots/image-11.png)

![Alt text](screenshots/image-12.png)

![Alt text](screenshots/image-15.png)

## 7. Create POD

![Alt text](screenshots/image-14.png)

## 8. Setup Kube-Scheduler and log file
Tell the pods which node to go
![Alt text](screenshots/image-13.png)

## 9. Create deployment pods manifest

![Alt text](screenshots/image-16.png)

## 10. Setup Kube-Controller-manager and log file
Controllers make sure that pods are running

![Alt text](screenshots/image-17.png)

## 9. Create Service manifest

![Alt text](screenshots/image-20.png)

## 11. Kube proxy
In charge of networking, setting up networking rules on the nodes allowing the pods to communicate

![Alt text](screenshots/image-18.png)

As you can see the 1st curl wasn't working and after setting up the kube-proxy we could curl our nginx pod