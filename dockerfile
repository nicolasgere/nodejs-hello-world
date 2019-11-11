FROM node
WORKDIR /app

RUN copy . .
RUN npm install
CMD npm start
