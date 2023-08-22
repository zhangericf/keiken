# Kubernetes Foundations

## 1. Install Kubernetes modules
![Alt text](image.png)
![Alt text](image-1.png)

## 2. Setup kubelet and log file + adding test pod
Node component that talk to the container runtime to tell when and what to run

![Alt text](image-2.png)

## 3. Install etcd

![Alt text](image-4.png)
https://github.com/etcd-io/etcd/releases/

## 4. Setup etcd
store state

![Alt text](image-5.png)
![Alt text](image-6.png)
![Alt text](image-7.png)

## 5. Setup Kube-apiserver + log file
Server for kubernetes api
Access to ressources, Coordonates, Authorization, Authentification, Admissions, Metrix, Reports

![Alt text](image-3.png)

## 6. Connect Kubelet to kube apiserver with kubectl

![Alt text](image-8.png)

### 6.1 Setup kubectl config
![Alt text](image-9.png)
![Alt text](image-10.png)
![Alt text](image-11.png)

![Alt text](image-12.png)

![Alt text](image-15.png)

## 7. Create POD

![Alt text](image-14.png)

## 8. Setup Kube-Scheduler and log file
Tell the pods which node to go
![Alt text](image-13.png)

## 9. Create deployment pods manifest

![Alt text](image-16.png)

## 10. Setup Kube-Controller-manager and log file
Controllers make sure that pods are running

![Alt text](image-17.png)

## 9. Create Service manifest

![Alt text](image-20.png)

## 11. Kube proxy
In charge of networking, setting up networking rules on the nodes allowing the pods to communicate

![Alt text](image-18.png)

As you can see the 1st curl wasn't working and after setting up the kube-proxy we could curl our nginx pod