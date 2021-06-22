# + Mas Cafe

## Características:

* Integración con DatoCMS (incluyendo optimización de imágenes).
* PWA 100% offline.
* Integración con Snipcart para e-commerces.
* Optimización de SEO (open-graph metatags).
* Componentes para animaciones, *hooks* y otras utilidades para UX (parallax, animaciones de viewport, zoom de imágenes).
* Uso de TailwindCSS.
* Layout personalizable compartido entre todas las páginas.

## Estructura del proyecto:

* **/pages/**: posee la estructura tradicional para Next.js, pero cada página exporta el default de su componente principal respectivo, proveniente de **/components/www/**

* **/components/www/**: acá residen los componentes que pertenecen de primera mano a las páginas, siendo cada **index.tsx** el archivo que exporta el componente como *default* de cada ruta.

* **/lib/**: acá residen los archivos que se reutilizarán en todo el proyecto y que no sean componentes de React, como hooks, utilidades y los modelos de datos que manejará DatoCMS.
