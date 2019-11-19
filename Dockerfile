FROM node:8.0   
RUN mkdir /app
ADD . /app
WORKDIR /app
COPY package.json .
RUN npm install    
EXPOSE 3001
CMD [ "npm", "start" ] 
