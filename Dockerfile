FROM node:18.18-alpine3.18

# RUN addgroup whoget && adduser -S -G whoget whoget
# USER whoget
WORKDIR /whoget

COPY package*.json .
RUN npm install
COPY . .

ENV API_URL=http://0.0.0.0:8080/
EXPOSE 3000

CMD ["npm", "dev"]