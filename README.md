# 💪 GymTracker — Rutina de Musculación

App web para trackear tu rutina semanal de musculación, registrar cargas y ver la evolución.

## 🚀 Uso rápido

Abrí `index.html` en cualquier navegador. No necesita servidor ni instalación.

## ☁️ Publicar en GitHub Pages (gratis)

1. Creá un repositorio en GitHub (puede ser privado o público)
2. Subí el archivo `index.html`
3. En el repo → **Settings** → **Pages** → Source: `main` branch, carpeta `/root`
4. En unos minutos tenés la app en `https://TU_USUARIO.github.io/TU_REPO/`
5. Link a la pagina: https://sebastianadriansosa.github.io/gymtracker/
6. Link a Firebase: https://console.firebase.google.com/project/gymtracker-519a4/firestore/databases/-default-/data/~2Fusers~2FNA4YNk4m6QPSyPt4ibT6KQ1Fwzv1

## 📱 Funciones

- **Rutina**: Navegá por cada día de la semana. Abre automáticamente el día de hoy.
- **Registrar peso**: Expandí cada ejercicio, escribí los kg y guardá.
- **Check-in**: Marcá el día como completado con el botón verde.
- **Reportes**: Gráfico de asistencia semanal, calendario de 28 días, evolución de carga por ejercicio, y máximos por grupo muscular.
- **Historial**: Tabla completa de todos los registros con diferencias respecto a la sesión anterior.

## 💾 Almacenamiento

Los datos se guardan en `localStorage` del navegador — sin servidor, sin cuenta, sin costo.

> ⚠️ Si borrás los datos del navegador o usás modo incógnito, se pierden los registros.
> Para backup: abrí la consola del navegador → `localStorage.getItem('gymtracker')` y copiá el JSON.

## 🛠 Stack

- HTML + CSS + JS vanilla (sin frameworks)
- Chart.js 4.4 (CDN)
- Google Fonts (Bebas Neue + DM Sans)
