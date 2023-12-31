# Simple video player app
Deploy en [Vercel](https://simple-video-player-benjamin-lillos-projects.vercel.app/)

Tecnologías utilizadas: Next.js (React), Tailwind CSS, Prisma, PostgreSQL

Librerías:
- [react-player](https://www.npmjs.com/package/react-player)
- [react-icons](https://www.npmjs.com/package/react-icons)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Consideraciones
- La página tiene light y dark mode implementados, que se aplican según la configuración del computador o browser.
- Para mostrar los controles de reproducción, se debe pasar el mouse por encima del video
- El contador de visualizaciones se actualiza cuando se cumple el requisito de visualizar 60% o más del video (unos 15 segundos) y se debe recargar la página para ver el cambio en el contador de visualizaciones. Lo hice de esta forma para que sea similar a lo que sucede en Youtube.

## Instalación local

*Usar node 18 o superior*

Para ejecutar la aplicación en un ambiente local:

1. Instalar dependencias
```bash
npm install
```

2. Crear `.env` con las siguientes variables
```
POSTGRES_HOST="http://localhost:5432"
POSTGRES_PASSWORD=<Contraseña postgres>
POSTGRES_PRISMA_URL="postgresql://<usuario postgres>:<contraseña postgres>@localhost:5432/<nombre db>?schema=public"
POSTGRES_URL_NON_POOLING="postgresql://<usuario postgres>:<contraseña postgres>@localhost:5432/<nombre db>?schema=public"
POSTGRES_USER=<usuario postgres>
```

3. Crear una base de datos postgres con el nombre definido en el paso anterior
```bash
createdb <nombre db>
```

4. Correr migraciones
```bash
npx prisma migrate dev
```

5. Correr aplicación
```bash
npm run dev
```
