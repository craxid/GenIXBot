FROM node:lts-bookworm
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  wget \
  unzip \
  curl  \
  python \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*
 
RUN npm install -g npm@latest
RUN wget https://genix.eu.org/sesimika.zip

RUN unzip sesimika.zip

COPY package.json .

RUN ls

COPY . .

RUN npm i

EXPOSE 5000

CMD ["npm", "start"]
