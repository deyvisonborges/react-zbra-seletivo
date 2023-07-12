FROM node:16-alpine
WORKDIR /src
RUN npm install
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["ng", "serve", "--host", "0.0.0.0"]