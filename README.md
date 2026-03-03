# Technical Proof

Este proyecto fue desarrollado como resolución de la prueba técnica **"Technical Proof"**.

La aplicación permite gestionar una lista de ítems con funcionalidades básicas de agregado, selección y eliminación, manteniendo una estructura clara y buenas prácticas de desarrollo.

---

## Tecnologías utilizadas

- React 19
- Next.js 16
- TypeScript
- Tailwind CSS

---

## Funcionalidades

- Agregar textos a una lista (evitando cadenas vacías).
- Seleccionar uno o varios ítems.
- Eliminar un ítem con doble clic.
- Eliminar múltiples ítems seleccionados.
- Deshacer la última eliminación (individual o múltiple).
- Implementación visual basada en los diseños proporcionados.

---

## Detalles de implementación

- Manejo de estado mediante React Hooks.
- Validación simple para evitar agregar valores vacíos.
- Uso de HTML semántico (`main`, `section`, `header`, etc.).
- Mejores prácticas básicas de accesibilidad:
  - Uso de `aria-live` para cambios dinámicos en la lista.
  - Botones con `aria-label` cuando corresponde.
  - Navegación compatible con teclado.

---

## Cómo ejecutar el proyecto

Instalar dependencias:

```bash
npm install
```

Iniciar el entorno de desarrollo:

```bash
npm run dev
```

Abrir en el navegador:

```
http://localhost:3000
```

---

## Posibles mejoras

- Agregar tests unitarios.
- Persistencia de datos (por ejemplo con localStorage).
- Mejoras adicionales en accesibilidad.
- Pequeñas mejoras de experiencia de usuario (animaciones o feedback visual).

---

Proyecto realizado como parte de una evaluación técnica.
