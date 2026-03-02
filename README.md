
# 🚀 FlowPilot (Enterprise Edition)

FlowPilot é uma plataforma full stack para gestão de demandas de TI, incidentes, runbooks e métricas operacionais.

Projeto estruturado com foco em:

- Clean Architecture
- DDD (Domain-Driven Design) leve
- Segurança real com JWT
- Docker-first
- Deploy-ready (Render + Vercel)
- CI/CD GitHub Actions

---

# 🏗 Arquitetura

Monorepo:

/apps
   /api
   /web
/packages
   /shared
/docs

---

## Clean Architecture

UI → Controllers → UseCases → Domain → Infrastructure → Database

---

# ☁ Deploy Gratuito

## Backend → Render

Build Command:
npm install && npm run build

Start Command:
npm run start

Variáveis:
DATABASE_URL
JWT_ACCESS_SECRET
JWT_REFRESH_SECRET
CORS_ORIGIN

---

## Frontend → Vercel

Root: apps/web
Env:
NEXT_PUBLIC_API_URL=https://sua-api.onrender.com

---

# 🐳 Local

docker compose up --build

Web: http://localhost:3000
API: http://localhost:3001/api/health

---

# 📦 Licença

MIT
