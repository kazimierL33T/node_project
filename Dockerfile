#use a node base image
FROM node:22-alpine

# set the working directory
WORKDIR /app

# copy package.json contents
COPY package.json ./

#install dependencies
RUN npm install

#copy the rest of the application code 
COPY . .

#expooose the port that node.js runs on for the contianer to run
EXPOSE 3000

#run the application
CMD ["nodemon", "app.js"]