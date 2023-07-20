# DOCKER

## Defination :

Docker is a platform that allows you to develop, deploy, and run applications inside containers. Containers are lightweight and isolated environments that include everything needed to run an application, including the code, runtime, libraries, and system tools. Docker makes it easy to package and distribute applications as containers, ensuring they run consistently across different environments.

## Docker Images :

Docker images are the building blocks of containers. They are read-only templates that define the application's environment. You can create your own Docker images or use existing ones from Docker Hub, which is a registry of publicly available images.

## Docker Container :

Containers are instances of Docker images. They are the running processes that encapsulate the application and its dependencies. Containers are isolated from the host system and from other containers, making them portable and secure.

## Docker File :

 A Dockerfile is a text file that contains instructions for building a Docker image. It defines the base image, sets up the application environment, and copies the necessary files into the image.

## Docker Compose :
 Docker Compose is a tool for defining and running multi-container Docker applications. It uses a YAML file to define the services, networks, and volumes required for your application.

### Commands Used in DockerFile

```
FROM: Specifies the base image for your Docker image.

COPY: Copies files or directories from the host machine to the image.

ADD: Similar to COPY, but it also supports URLs and unpacks compressed files.

WORKDIR: Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY, and ADD commands.

RUN: Executes commands in the shell of the image during the build process.

CMD: Specifies the default command to run when the container starts. It's usually the main process of the application.

ENTRYPOINT: Configures the container to run as an executable. It's combined with CMD to set default arguments.

EXPOSE: Informs Docker that the container listens on a specified network port at runtime.

ENV: Sets environment variables inside the container.

ARG: Declares variables that can be passed to the Docker image build using the --build-arg option.

VOLUME: Creates a mount point and specifies that the container can write to the specified directory.

USER: Sets the user that will run the following commands in the Dockerfile.

LABEL: Adds metadata to the image.

HEALTHCHECK: Defines a command to check the container's health status.

CMD ["npm", "start"]: An alternative form of CMD to run the command without using a shell.
```
### Docker Commands for Containers

```
docker pull <image>: Pulls a Docker image from a container registry like Docker Hub.

docker build -t <image-name> <path-to-dockerfile>: Builds a Docker image from a Dockerfile and assigns a custom tag (-t) to the image.

docker run <image>: Runs a Docker container from an image.

docker ps: Lists running containers.

docker ps -a: Lists all containers, including stopped ones.

docker stop <container>: Stops a running container.

docker start <container>: Starts a stopped container.

docker restart <container>: Restarts a running or stopped container.

docker rm <container>: Removes a stopped container.

docker images: Lists available Docker images.

docker rmi <image>: Removes a Docker image.

docker exec -it <container> <command>: Executes a command inside a running container.

docker logs <container>: Shows the logs of a running container.

docker-compose up: Starts all services defined in a Docker Compose file.

docker-compose down: Stops and removes all containers, networks, and volumes defined in a Docker Compose file.

docker network ls: Lists available Docker networks.

docker volume ls: Lists available Docker volumes.

docker stats: Displays a live stream of container resource usage.

docker inspect <container>: Shows detailed information about a container.

docker image prune: Removes unused Docker images.

docker system prune: Removes unused data, including stopped containers, unused networks, and dangling images.

Remember that many of these commands have additional options and flags that you can use to customize their behavior. You can use docker --help or docker <command> --help to see the available options for each command.

```

<hr/>

# Made By Shahbaz Shaikh
<hr/>
