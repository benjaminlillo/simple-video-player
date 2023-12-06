# Simple video player app
Deploy en [Vercel](https://simple-video-player-benjamin-lillos-projects.vercel.app/)

Tecnologías utilizadas: Next.js (React), Prisma, Tailwind CSS

Librerías:
- [react-player](https://www.npmjs.com/package/react-player)
- [react-icons](https://www.npmjs.com/package/react-icons)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

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

  
4. Correr migraciones
```bash
npx prisma migrate dev
```

5. Correr aplicación
```bash
npm run dev
```
