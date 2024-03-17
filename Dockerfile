FROM node:18-alpine

WORKDIR /usr/resume_parser

COPY ./package.json ./package.json
RUN npm i
COPY ./src ./src

EXPOSE 3001

CMD ["npm", "start"]
