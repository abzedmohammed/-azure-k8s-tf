FROM node:16.18.1-alpine
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm ci
COPY . .
EXPOSE 3001
CMD [ "npm", "run", "dev" ]