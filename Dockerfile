FROM nginx

COPY ./  /usr/share/nginx/html/

# Para  construir la imagen correr el comando
#  docker image build -t eas-docker-deploy .

# Para corrrer un conteder con la imagen usar el comando
#
# docker container run -itd --name eas-container -p 80:80  eas-docker-deploy
