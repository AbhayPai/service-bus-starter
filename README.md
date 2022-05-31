# Server less function for event subscription from data lake

## Prerequisites
1. docker
2. lando
3. database file in gz format

## Lando support for local service bus development
1. Duplicate file from duplicate-me-with-hidden-file.env to .env by entering actual values in it.
```
mv duplicate-me-with-hidden-file.env .env
```
2. Run Lando start
```
lando start
```
3. Run Lando database import
```
lando db-import file-name.sql.gz -h ictsidsnodejs
```

## Kubernetes support for launching deployment
```
kubectl apply -f kubernetes/dev-nodejs-deployment.yaml
kubectl apply -f kubernetes/devsecrets-nodejs.yaml
```
