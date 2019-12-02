FROM node:alpine
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN echo $NODE_ENV

WORKDIR /app
COPY . .

RUN npm install
CMD npm start
