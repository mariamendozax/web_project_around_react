### web_project_around_react

Sobre el proyecto

web_project_around_react es un refactor del proyecto original en JavaScript vanilla "Alrededor de los EE.UU.", reconstruido desde cero usando React y Vite. La lógica y estructura del proyecto original fueron completamente desestructuradas y reorganizadas en componentes reutilizables de React, reemplazando la manipulación manual del DOM por una arquitectura declarativa basada en componentes.

Este proyecto forma parte de mi camino de aprendizaje en el bootcamp de Desarrollo Web de TripleTen, enfocado en la transición de patrones de JS vanilla a prácticas modernas de desarrollo con React.

✨ Tecnologías utilizadas
React — Librería de UI basada en componentes, usada para reconstruir toda la estructura de la app
Vite — Herramienta de build rápida y servidor de desarrollo para el proyecto de React
React Hooks
useState — para manejar el estado local de componentes (formularios, modales, tarjetas, etc.)
useEffect — para manejar efectos secundarios como la obtención de datos y actualizaciones relacionadas al DOM
useContext — para compartir estado global (como los datos del usuario actual) entre componentes sin necesidad de "prop drilling"
Integración con API REST — se conecta a un servidor backend para obtener y persistir datos del usuario, información del perfil y datos de las tarjetas (src/utils/api.js)
JSX — para escribir el markup de la UI de forma declarativa
CSS — para el estilo de los componentes (estructura basada en bloques heredada del proyecto original)
🧩 Funcionalidades principales
Estructura totalmente componentizada (Header, Main, Footer, PopupWithForm, ImagePopup, Card, etc.)
Edición del perfil de usuario y actualización de avatar conectadas a una API en vivo
Creación, eliminación y "me gusta" de tarjetas sincronizadas con el servidor
Contexto global de usuario para evitar el prop drilling entre componentes anidados
Diseño responsivo heredado y adaptado de la versión original en JS vanilla

**_ María — Estudiante de Desarrollo Web Full Stack en TripleTen. _**

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
