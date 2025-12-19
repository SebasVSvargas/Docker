# Proyecto Node.js (Dockerizado)

Este repositorio contiene una aplicación **Node.js** diseñada para ejecutarse dentro de un contenedor **Docker**. A continuación se detallan los pasos necesarios para construir la imagen y desplegar el proyecto.

---

## Requisitos previos

Para ejecutar este proyecto, únicamente necesitas tener instalado:

- **Docker Desktop** (Windows/macOS) o **Docker Engine** (Linux).

---

## Instrucciones de Despliegue

Sigue estos pasos para poner en marcha la aplicación:

### 1. Construir la imagen de Docker

Abre una terminal en la raíz del proyecto (donde se encuentra el archivo `Dockerfile`) y ejecuta el siguiente comando. Esto creará una imagen etiquetada como `mi-app-node`.

```bash
docker build -t mi-app-node .
```

### 2. Ejecutar el contenedor

Una vez finalizada la construcción de la imagen, ejecuta el siguiente comando para iniciar el contenedor.

```bash
docker run -d -p 3000:3000 --name contenedor-node mi-app-node
```

**Desglose del comando:**
- `-d`: Ejecuta el contenedor en segundo plano (modo "detached"), liberando la terminal.
- `-p 3000:3000`: Conecta el puerto **3000** de tu máquina (host) con el puerto **3000** del contenedor.
- `--name contenedor-node`: Asigna el nombre "contenedor-node" a esta instancia para identificarla fácilmente.
- `mi-app-node`: Es el nombre de la imagen que construimos en el paso anterior.

### 3. Acceder a la aplicación

Abre tu navegador web favorito e ingresa a la siguiente dirección:

[http://localhost:3000](http://localhost:3000)

Deberías ver la aplicación ejecutándose correctamente.

---

## Gestión del Contenedor

Aquí tienes algunos comandos útiles para administrar la aplicación una vez que está corriendo:

### Ver los logs en tiempo real
Si necesitas ver qué está ocurriendo dentro de la aplicación o depurar errores:

```bash
docker logs -f contenedor-node
```
*(Presiona `Ctrl + C` para salir de la vista de logs)*

### Detener la aplicación
Para apagar el contenedor de forma segura:

```bash
docker stop contenedor-node
```

### Eliminar el contenedor
Si deseas borrar el contenedor (por ejemplo, para volver a crearlo con una nueva versión de la imagen):

```bash
docker rm contenedor-node
```
