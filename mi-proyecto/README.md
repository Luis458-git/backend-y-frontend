# Tienda de ropa

Práctica Full Stack con un catálogo de cinco productos de ropa. El backend ofrece una API REST con datos en memoria y el frontend muestra nombres, categorías, precios y stock en tarjetas, con estados de carga y error.

## Tecnologías

- Backend: Node.js, Express y CORS; Nodemon para desarrollo.
- Frontend: React, React DOM, Vite y CSS.
- Consulta de datos: `fetch`, `useState` y `useEffect`.

## Estructura

```text
mi-proyecto/
├── README.md
├── backend/
│   ├── src/
│   │   ├── controllers/products.controller.js
│   │   └── routes/products.routes.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/Products.jsx
    │   ├── hooks/
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── main.js
    │   ├── counter.js
    │   └── style.css
    ├── index.html
    ├── package.json
    └── package-lock.json
```

`main.jsx` es la entrada activa. `main.js` pertenece a la plantilla original y se conserva, aunque no se utiliza en la aplicación. `hooks/` está reservado y vacío; los hooks utilizados están en `Products.jsx`.

## Requisitos previos

- Node.js compatible con Vite instalado: versión 20.19 o posterior de la rama 20, o versión 22.12 o superior.
- npm y dos terminales de PowerShell.

## Instalar dependencias

Desde `mi-proyecto`:

```powershell
cd backend
npm install
cd ../frontend
npm install
```

Si ya están instaladas, no es necesario repetir estos comandos.

## Iniciar el backend

En una terminal situada en `mi-proyecto`:

```powershell
cd backend
npm run dev
```

También se puede usar `npm start` para ejecutar Node sin Nodemon.

- Dirección del backend: http://localhost:5000
- Productos: http://localhost:5000/api/products

La raíz `/` no tiene una ruta definida. La ruta `GET /api/products` devuelve un arreglo JSON con los campos `id`, `name`, `category`, `price` y `stock`.

Para probarla en PowerShell:

```powershell
Invoke-RestMethod -Uri http://localhost:5000/api/products
```

## Iniciar el frontend

En otra terminal situada en `mi-proyecto`:

```powershell
cd frontend
npm run dev
```

Abre http://localhost:5173 con el backend activo. Vite utiliza ese puerto por defecto; si está ocupado, consulta la URL indicada en la terminal.

Debes ver las cinco tarjetas con nombre, categoría, precio y stock. Para comprobar el diseño, reduce el ancho del navegador. Para comprobar el estado de error, detén el backend y recarga la página; después vuelve a iniciarlo y recarga.

Para verificar la compilación desde `frontend`:

```powershell
npm run build
```

## Cómo funciona useEffect([])

`Products.jsx` utiliza `useEffect(() => { ... }, [])` para iniciar la consulta al montar el componente. El arreglo vacío evita repetirla por actualizaciones de estado. `fetch` consulta la API y `useState` mantiene los productos, la carga y los errores. Si el componente se desmonta y vuelve a montarse, el efecto se ejecuta otra vez. En desarrollo, React con Strict Mode puede ejecutar un ciclo adicional de comprobación.

Los productos se almacenan en memoria. Este proyecto no incluye base de datos, autenticación ni carrito.
