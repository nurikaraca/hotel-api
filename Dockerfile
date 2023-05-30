FROM node:18.15.0
WORKDIR /home/node/app
COPY server /home/node/app
RUN  npm install
CMD  npm run start
EXPOSE 5000