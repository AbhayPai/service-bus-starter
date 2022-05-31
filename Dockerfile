FROM node:buster-slim

RUN  mkdir -p /var/www/html/

WORKDIR /var/www/html/

COPY . /var/www/html/

CMD ["npm", "start"]
