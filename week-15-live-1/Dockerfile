FROM node:16-apline

WORKDIR /app

COPY ..

RUN npm install
RUN npm run build
RUN npx run build
  

EXPORT 3000

CMD ["node","dist/main.js"]
