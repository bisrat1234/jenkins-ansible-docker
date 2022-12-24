FROM ubuntu:latest

RUN apt update &&  apt install ansible -y && apt install openssh-client -y && apt install nano -y

RUN useradd -rm -d /home/ubuntu -s /bin/bash -g root -G sudo -u 1000 test 

RUN  echo 'test:test' | chpasswd

WORKDIR /usr/local/scripts
