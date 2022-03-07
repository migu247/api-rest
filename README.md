# Backend CRUD API REST

_Ejemplo de WS REST con NodeJS que proporciona un API CRUD para gestionar una DB MongoDB._

## Comenzando 🚀

_Para obtener una copia del repositorio deberemos introducir en nuestro terminal lo siguiente:_

```
$ git clone https://migu247@github.com/migu247/api-rest api-rest

```

### Pre-requisitos 📋

_Lo primero que deberemos instalar es nuestro editor de textos, que en este caso será **Visual Studio Code**._

```
$ sudo snap install --classic code
```
_Para ejecutar VS Code en el directorio en el que nos encontramos, deberemos introducir:_

```
$ code .
```

_Lo siguiente que necesitaremos será un servicio que nos permita comprobar nuestras api como es **Postman**_
```
$ sudo snap install postman 
```

_También instalaremos el gestor de paquetes **Node JS**_
```
$ sudo apt update
$ sudo apt install npm
```

_Ahora instalaremos una extension que nos ayude a instalar y mantener Node:_
```
$ sudo npm clean -f 
$ sudo npm i -g n 
```
_Y lo actualizamos NodeJS a la última version:_
```
$ sudo n stable
```


_Para mantener nuestros en la nube y no perder versiones antiguas de nuestros proyectos necesitaremos un repositorio de archivos. Para esto instalaremos **Git** y configuraremos los datos:_
```
$ sudo apt install git 

```

_A continuación instalaremos las distintas bibliotecas que necesitaremos:_

- **Express**
```
$ npm i -S express 
```
- **Nodemon**
```
$ npm i -D nodemon
```
_Necesitamos alguna manera de saber que esta pasando en nuestro servidor. Para esto utilizaremos un motor de registro como es **Morgan**. Lo instalamos:_
```
$ npm i -S morgan 
```

_Finalmente necesitaremos una base de datos para guardar las posibles peticiones que enviemos. Utilizaremos **MongoDB**, y lo instalaremos de la siguiente forma:_
```
$ sudo apt update 
$ sudo apt install -y mongodb 
```
_Ahora, dentro de nuestro proyecto debemos instalar las bibliotecas **Mongo**. Para eso introducimos lo siguiente en la consola:_
```
$ cd  
$ cd node/api-rest 
$ npm i -S mongodb 
$ npm i -S mongojs 
```
### Instalación 🔧

_Para comenzar lo que debemos hacer es crear el repositorio en el equipo_

_Lo que deberemos hacer es crear un repositorio ya sea en git o bitbucket y clonarlo:_

```
git clone https://<usuario>@github.org/<usuario>/practica.git api-rest
```
_Una vez creado el repositorio deberemos activar el npm para poder hacer las peticiones de la api:_

```
$ npm start 
```

_Y finalmente deberemos iniciar MongoDB para insertar peticiones en la base de datos:_

```
$ sudo systemctl start mongodb
```

## Ejecutando las pruebas ⚙️

_Para ver si nuestras peticiones funcionan deberemos importar el archivo API-REST.postamn en Postman y una vez iniciado todo, introducir la direccion que nos indica npm en el terminal. AHora ya podremos comprobar las peticiones GET, POST, PUT y DELETE_


## Construido con 🛠️


* [VisualStudio](https://code.visualstudio.com/) - Editor de texto usado

## Versionado 📌

[Github](https://github.com/) [tags en este repositorio](https://github.com/migu247/api-rest/releases).

## Autores ✒️

* **Miguel Ángel Ferrer García de la Reina** - [migu247](https://github.com/migu247/api-rest)
 