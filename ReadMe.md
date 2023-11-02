
### What is it about?
A simple Webapp using ReactJs , Postgres and NodeJs.
> 1/ we use docker-compose to create layers of the application to run in container. Nginx is the HTTP server.
> 2/ we use the previous experiment and make it managed by a K8S cluster
>> NB: everything runs using docker desktop.

### Some precious resources:


## Docker Compose Section:
> Run it with: docker-compose up --build

## K8S Section:
> In this section, the NGINX folder is not needed, but I keep it to have it in case.

> Generate password with Kubectl: kubectl create secret generic pgpassword --from-literal PGPASSWORD=Blablalbla

> K8S Ingress NGINX controler (in my case: Docker Desktop and I don't have HELM, so I am taking the YAML manifest instead) https://kubernetes.github.io/ingress-nginx/deploy/#docker-desktop 
>> kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml
>> To check the install run this: kubectl get pods -n ingress-nginx and yay, whoomp there it is!


> Apply the conf to K8S: kubectl apply -f k8s 

> See services per Cluster IP: kubectl get services

> See the PODS status: kubectl get pods

> Delete: kubectl delete -f k8s

> In case of an issue with the pods deployments, run the kubectl describe pod PODNAME