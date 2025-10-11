
# Ecommerce Application

in this repository I'm making E_commerce appilcaiton using MicroServices, Here I'm uisng Nest.js and MongoDB for User-Service , and using Express, MYSQL, Postgray for product-service and Order-service

## Docker instruction 

* Docker installed on your system.
* The application Source code 

---

## 🐋 Running the Application with Docker

### 1. Make DockerFile according to yor application requirement.

### 2. Make docker image with the following instruction.
####  docker build -t myrepo/myapp:1.0.0 .
* -t --> tag name for the image
* myrepo/myapp --> repository/image name
* 1.0.0 --> Tag version
* . current directory as build context

### 3. docker images (this command is use to see the images.)

### 4.  docker-compose file 

* define your compose file for your db and your application
* run docker compose up (to run your application in the container)

# Note
## in case if your docker image and docker-hub repository name are not same in that case you have to creat alias of your lcoal image with docker-hub repository then you can push you image local image on docker-hub repository. to pushing just use command(docker push repository-name)
