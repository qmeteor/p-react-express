# Instructions from the app developer

# - lets try 8.3.0 to see what happens
FROM node:8.3.0
LABEL developer="Bien" \
      description="Dockerize authentication express app."
# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
# - this app listens on port 8080, but the container should launch on port 80
    # so it should respond to http://localhost:80 on your computer
EXPOSE 5000

# - then it should create a directory /usr/src/react-app for all files with 'mkdir -p /usr/src/react-app
RUN mkdir -p /usr/react-app
# Node uses a "package manager", so it needs to copy in package.json file but move into working directory first
WORKDIR /usr/react-app
COPY package.json package.json
COPY package-lock.json package-lock.json

# - then it needs to run npm install to install dependencies from package.json
    # to keep it clean and small run npm cache clean
RUN npm install && npm cache verify

# copy all files from current directory on host into current working directory in image
COPY . .

# - then it needs to start container with command
CMD [ "npm", "start" ]