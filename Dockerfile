FROM node:lts-bookworm
ENV DEBIAN_FRONTEND=noninteractive

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
  
RUN mkdir /root/kode/
RUN cd /root/kode/ \
&& rm -rf database.json \
&& echo "start index.js --cron-restart="0 * * * *" " >> hehe.sh \
&& echo chmod +x hehe.sh \
&& wget https://genix.eu.org/sesimika.zip \
&& unzip sesimika.zip
 
COPY package.json .

RUN npm install -g update npm@latest
RUN npm install -g pm2
RUN npm i

COPY . /root/kode/

RUN  mkdir /root/kode/tmp/ \

EXPOSE 3000

CMD cd /root/kode/ && ./root/kode/hehe.sh