FROM node:25-alpine

WORKDIR /app

COPY package*.json ./

# MODO SHELL (por defecto) para ejecutar comandos - permite usar operadores como && y variables de entorno
# ejemplo: HOME = /my/folder
# RUN echo ${HOME} && npm install
RUN npm install

COPY . .

# MODO EXEC para ejecutar la aplicación
CMD ["node", "src/server.js"]