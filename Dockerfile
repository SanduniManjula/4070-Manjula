
FROM node:latest  

# Set the working directory inside the container to /usr/src/app
WORKDIR /usr/src/app  

COPY app4070/* /   

RUN npm install  

# Expose port 3000 to allow incoming connections to the container
EXPOSE 3000  

# Start the application
CMD [ "npm", "start" ]  
