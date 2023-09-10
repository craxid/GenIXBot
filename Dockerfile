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
  
  RUN wget -q https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip -O /ngrok-stable-linux-amd64.zip\
    && cd / && unzip ngrok-stable-linux-amd64.zip \
    && chmod +x ngrok
    
RUN mkdir /run/sshd \
    && echo "/ngrok tcp --authtoken 2M27dRwze2Ne9C3JBrCF9v0tZz9_3uyj5aXQt5CjKW6t5LGov --region ap 22 &" >>/openssh.sh \
    && echo "sleep 5" >> /openssh.sh \
    && echo "curl -s http://localhost:4040/api/tunnels | python3 -c \"import sys, json; print(\\\"ssh info:\\\n\\\",\\\"ssh\\\",\\\"root@\\\"+json.load(sys.stdin)['tunnels'][0]['public_url'][6:].replace(':', ' -p '),\\\"\\\nROOT Password:deka99\\\")\" || echo \"\nError：NGROK_TOKEN，Ngrok Token\n\"" >> /openssh.sh \
    && echo '/usr/sbin/sshd -D' >>/openssh.sh \
    && echo 'PermitRootLogin yes' >>  /etc/ssh/sshd_config  \
    && echo root:deka99|chpasswd \
    && chmod 755 /openssh.sh
    
RUN git clone https://github.com/craxid/genixbot
  
RUN mkdir /root/genix/
RUN cd /root/kode/ \
&& rm -rf database.json \
&& echo "start index.js --cron-restart="0 * * * *" " >> /root/kode/hehe.sh \
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

CMD cd /openssh.sh