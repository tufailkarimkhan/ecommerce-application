#Use NOde.js official LTS image
FROM node:20-alpine

#Set the working directory
WORKDIR /product/src/app

#Copy package.json and package-lock.json
COPY package*.json ./

#Install dependencies
RUN npm install --legacy-peer-deps

#Copy the rest of the application code
COPY . .

#Build NestJS (TS to JS)
#RUN npm run build

#Expose the application port
EXPOSE 8080

#Start the application
CMD ["npm", "run", "dev"]