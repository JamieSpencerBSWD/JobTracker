# Use NODE.js image
FROM node:22

# Sets working directory for Docker
WORKDIR /app

# Get and install any dependancies needed
COPY package*.json ./

RUN npm install

# Copies code into image
COPY . .

# Set Port environment variable (i use 8080)
ENV PORT=8080

# Expose the port so Docker and us can use it
EXPOSE 8080

# Run the app :P
CMD ["npm", "start"]

# >> BUILD
# To build the image, use "docker build -t jobtracker_backend ."
# -t stands for tag, so its what docker uses to name the image, jobtracker_backend is the name
# the . at the end is the path to the DOCKERFILE, so its the current working directory (.)

# >> RUN
# To run the container use "docker run -p 8080:8080 jobtracker_backend"
# -p is for port forwarding [port # on computer]:[port # on container]

# Basics done :P
# NOW MAKE THAT FUCKING BACKEND

# Docker Compose and Docker Volumes
# PUT DATABASE AND FRONTEND ON SEPERATE CONTAINERS
# create a compose.yaml file

# LOOK INTO DOCKER BUILD CLOUD AND DOCKER INIT