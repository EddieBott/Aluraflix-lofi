Aluraflix lofi

Aluraflix lofi es una plataforma web creada con React que permite gestionar videos de diferentes categorías. El proyecto implementa funcionalidades como listar, registrar, actualizar, eliminar y reproducir videos, utilizando una API simulada con json-server. Este proyecto refuerza conceptos clave de React como componentización, hooks, manejo de rutas y consumo de APIs.

Tecnologías Utilizadas

React: Biblioteca principal para la construcción de interfaces.

React Router: Para la navegación entre páginas.

CSS: Para el diseño y estilo de la aplicación.

json-server: Para simular una API REST.

Funcionalidades Principales

Home:

Listado de videos organizados por categorías: Frontend, Backend, Innovación y Gestión.

Botones para editar o eliminar videos directamente desde las cards.

Editor de Videos:

Modal para editar la información de un video existente.

Nuevo Video:

Formulario para registrar un nuevo video en una categoría.

Video Player:

Al hacer click en alguna tarjeta te redireciona a un player de youtube, pero sin salir de l pagína.

Página 404:

Muestra un mensaje personalizado cuando se navega a una ruta o ID inexistente.

Consumo de API:

Solicitudes GET, POST, PUT y DELETE para gestionar los datos de los videos.

Instalación y Configuración

Prerrequisitos

Node.js instalado en tu sistema.

npm o yarn como gestor de paquetes.

Pasos para configurar el proyecto

Clonar el repositorio

git clone https://github.com/tu-usuario/aluraflix.git
cd aluraflix

Instalar las dependencias

npm install

De por si el servidor esta ligado otro repositorio en git que se ejecuta automaticamente a traves de My Json Server

Configurar json-server

Crea un archivo db.json en la raíz del proyecto con la estructura inicial:

{
  "videos": []
}

Ejecuta el servidor JSON:

json-server --watch db.json --port 3001(el que quieras)

Iniciar la aplicación

npm start

Estructura del Proyecto

Aluraflix/
|-- public/
|-- src/
    |-- assets/             # Recursos estáticos (imágenes)
    |-- components/         # Componentes reutilizables (Card, Header, Footer, etc.)
    |-- pages/              # Páginas principales (Home, Nuevo Video, NotFound, PlayerVideo)
    |-- App.js              # Configuración principal de React
    |-- index.js            # Punto de entrada
    |-- index.css           # Diseños generales
|-- db.json                 # Base de datos simulada para json-server
|-- package.json            # Configuración del proyecto

Uso de la Aplicación

Home:

Al ingresar, se muestran los videos organizados por categorías.

Los botones de "Editar" y "Borrar" permiten gestionar los videos directamente.

Registrar Nuevo Video:

Navega a la página "Nuevo Video".

Completa el formulario con los datos del video y selecciona una categoría.

Al guardar, el video aparecerá en la categoría correspondiente en el Home.

Editar Video:

Haz clic en "Editar" en cualquier card.

Se abre un modal para modificar la información.

Guarda los cambios para actualizarlos en la base de datos.

Eliminar Video:

Haz clic en "Borrar" en cualquier card.

El video se eliminará de la base de datos y del Home.

Video Player:

Al hacer click en alguna tarjeta te redireciona a un player de youtube, pero sin salir de l pagína.

Manejo de Errores:

Si se accede a una ID no existente, se muestra la página 404 con un enlace para volver al inicio.

Mejoras Futuras

Implementar autenticación de usuarios.

Agregar paginación para grandes cantidades de videos.

Integrar una API real para almacenamiento persistente.

Mejorar la accesibilidad y optimización de rendimiento.

Contribuciones

Si deseas contribuir a este proyecto, siéntete libre de crear un fork y abrir un pull request con tus mejoras.
