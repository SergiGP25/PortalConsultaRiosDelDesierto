# Frontend API Consulta

Este proyecto es una aplicación web desarrollada en **React** con **Vite**, estilizada con **Tailwind CSS** y siguiendo los principios de **Clean Architecture**. Permite consultar información de clientes, ver su historial de compras y descargar reportes a través de una interfaz moderna y responsiva.

## Características

-   **Arquitectura Limpia**: Separación clara en capas de Dominio, Datos y Presentación.
-   **Diseño Moderno**: Interfaz de usuario limpia y profesional construida con Tailwind CSS.
-   **Diseño Responsivo**: Adaptable a dispositivos móviles y de escritorio.
-   **Búsqueda de Clientes**: Consulta flexible por tipo y número de documento.
-   **Visualización de Compras**: Historial detallado de transacciones.
-   **Exportación de Datos**:
    -   Descarga de información del cliente en CSV.
    -   Descarga de reporte de fidelización en Excel.
-   **Dockerizado**: Listo para despliegue con Nginx.

## Requisitos Previos

-   **Node.js** (v18 o superior) para ejecución local.
-   **Docker** y **Docker Compose** para ejecución en contenedores (opcional).
-   Una API Backend corriendo. Por defecto configurada para buscar en el puerto local (ver `src/data/sources/api/ApiClient.js`).

---

## 🚀 Ejecución Local

1.  **Instalar dependencias**:
    Abre una terminal en la carpeta del proyecto e instala todas las librerías necesarias (incluyendo React, Vite y Tailwind CSS):
    ```bash
    npm install
    ```

2.  **Iniciar el servidor de desarrollo**:
    ```bash
    npm run dev
    ```

3.  **Acceder a la aplicación**:
    Abre tu navegador en `http://localhost:5173`.

---

## 🐳 Ejecución con Docker

Si prefieres no instalar Node.js o quieres simular un entorno de producción:

1.  **Construir y levantar el contenedor**:
    ```bash
    docker-compose up --build
    ```

2.  **Acceder a la aplicación**:
    Abre tu navegador en `http://localhost:5173`.

> **Nota**: La configuración de Docker asume que tu API backend está corriendo en tu máquina host en el puerto 8080. El contenedor se conecta a través de `host.docker.internal`.

---

## Estructura del Proyecto

```
src/
├── data/           # Capa de Datos (Implementación de repositorios, API)
├── domain/         # Capa de Dominio (Entidades, Casos de Uso, Interfaces)
├── presentation/   # Capa de Presentación (Componentes, Páginas, Estilos)
└── App.jsx         # Componente raíz
```
