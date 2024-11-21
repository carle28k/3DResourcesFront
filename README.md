# APP de Recursos 3D y VFX

Plataforma para la documetnación de recursos de la industria del 3D y los VFX. actualmente en desarrollo.

Será necesaria la ejecución del back para realizar las solicitudes a la base de datos. [Accede al proyecto del Back](https://github.com/carle28k/3DResourcesBack)

**Actualmente cuenta con:**
    - Vistas Software
	- Buscador Softwares
	- Detalles de Softwares
	- Rutas protegidas

**Pendiente de desarrollo:**
    - Sistema de autentificación
	- Creación, actualización y eliminación de recursos desde Front
	- Páginas de Hardware y Documentación



## Instalaciones iniciales

    - **React**

    - **yarn**


## Instalaciones de las dependencias

Abre la ruta del proyecto en la terminal y ejecuta: ` yarn install `

## Configuración de las bariables de entorno

  Crea un archivo .env y añade las siguientes variables de entorno:

` VITE_API_URL=http://localhost:3000 `

Asegurate de actualizar el puerto según el cual arrasques el back.

## Inicio del servidor de desarrollo

Abre la ruta del proyecto en la terminal y ejecuta: ` yarn dev `