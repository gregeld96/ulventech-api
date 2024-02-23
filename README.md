## Getting Started

First, install depedency:

```bash
npm i
```

Second, create .env file and insert information below into the .env file:

```bash
DATABASE_URL="file:./dev.db"
NODE_ENV="development"

JWT_KEY=prbrhEYlfQ4gSSHS
SALT_KEY=16
```

Third, run server local:

```bash
npm run dev
```

Fourth, open server host /api-docs to play with the swagger in the browser:

```bash
http://localhost:3000/api/docs
```