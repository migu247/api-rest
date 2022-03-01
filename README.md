# Backend CRUD API REST

_Ejemplo de WS REST con NodeJS que proporciona un API CRUD para gestionar una DB MongoDB._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Ver **Deployment** para conocer cómo desplegar el proyecto.


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
$ git config --global user.name mafg17 
$ git config --global user.email mafg17@alu.ua.es
$ git config --list 
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

_Indica cómo será ese paso_

```
Proporciona un ejemplo
```

_Y repite_

```
hasta finalizar
```

_Finaliza con un ejemplo de cómo obtener datos del sistema o cómo usarlos para una pequeña demo_

## Ejecutando las pruebas ⚙️

_Explica cómo ejecutar las pruebas automatizadas para este sistema_

### Analice las pruebas end-to-end 🔩

_Explica qué verifican estas pruebas y por qué_

```
Proporciona un ejemplo
```

### Y las pruebas de estilo de codificación ⌨️

_Explica qué verifican estas pruebas y por qué_

```
Proporciona un ejemplo
```

## Despliegue 📦

_Agrega notas adicionales sobre cómo hacer deploy_

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [ROME](https://rometools.github.io/rome/) - Usado para generar RSS

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/tu/tuProyecto) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Paco Maciá** - *Trabajo Inicial* - [pmacia](https://github.com/pmacia)
* **Fulanito Detal** - *Documentación* - [fulanitodetal](#fulanito-de-tal)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quiénes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.
