# Nala Home

Nala Home es un proyecto de página web de venta de productos que ofrece una variedad de categorías, incluyendo electrodomésticos, tecnología, flores, detalles y peluches, cerámicas, y velas. Este proyecto está diseñado para ser atractivo y fácil de usar, permitiendo a los usuarios navegar y comprar productos de manera eficiente.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
nala-home
├── src
│   ├── index.html          # Estructura principal de la página web
│   ├── css
│   │   ├── styles.css      # Estilos generales de la página
│   │   └── responsive.css   # Estilos responsivos para dispositivos móviles
│   ├── js
│   │   ├── main.js         # Script principal que inicializa la aplicación
│   │   ├── products.js     # Funciones para leer y procesar productos desde CSV
│   │   └── categories.js    # Lógica para manejar categorías de productos
│   └── data
│       └── products.csv    # Archivo CSV con información de productos
├── assets
│   └── images              # Carpeta que contiene imágenes de productos
├── README.md               # Documentación del proyecto
└── package.json            # Configuración para npm y dependencias
```

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega a la carpeta del proyecto.
3. Instala las dependencias necesarias ejecutando `npm install`.

## Uso

1. Abre el archivo `src/index.html` en tu navegador para ver la página web.
2. Navega a través de las categorías para explorar los productos disponibles.
3. Los productos se cargan dinámicamente desde el archivo `src/data/products.csv`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.