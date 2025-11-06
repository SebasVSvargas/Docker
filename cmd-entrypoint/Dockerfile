FROM alpine:3.20

#apk es el gestor de paquetes de Alpine Linux
#curl es una herramienta para transferir datos desde o hacia un servidor - solicitudes HTTP
RUN apk add --no-cache curl

#Indicamos en el entrypoint y especificamos curl como el ejecutable principal
ENTRYPOINT ["curl"]

#Acá indicamos los parámetros por defecto que se le pasarán a curl
CMD [ "--help" ]