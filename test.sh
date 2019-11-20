#!/bin/bash

# install the anuglar dependency
sudo npm install

# build the application
ng build --prod

# remove the container if exists or running
if [ $(sudo docker container ls -q -a --filter name=client_cont) != '' ]; then
     sudo docker container stop client_cont
    sudo docker container rm client_cont
fi

# remove the image if exists
if [ $(sudo docker image ls -q --filter reference=client_image)!= '' ]; then
    sudo docker image rm client_image
fi

# build the image
sudo docker build -t client_image .

# start the container
sudo docker run -itd -p 9090:80 --name client_cont client_image
