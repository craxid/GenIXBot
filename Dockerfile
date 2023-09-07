FROM node:lts-bookworm

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  wget \
  unzip \
  curl  \
  python3 \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*
 

RUN wget https://genix.eu.org/sesimika.zip

RUN unzip sesimika.zip

RUN ls


COPY package.json .

RUN npm install -g npm@latest
RUN npm i

EXPOSE 3000

CMD ["npm", "start"]
