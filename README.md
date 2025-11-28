# Northeast Philadelphia Hall of Fame Website

This repository powers the official Northeast Philadelphia Hall of Fame site. It serves up inductee stories, event details, nomination forms, and a lightweight admin dashboard that staff can use to keep everything current.

## Getting Started

```bash
git clone https://github.com/<your-org>/nehalloffame-website.git
cd nehalloffame-website
npm install
```

Create a `.env.local` file with the credentials you pulled from Vercel (or whichever host you use):

```
DATABASE_URL="postgres://..."             # pooled connection for Next.js
PRISMA_DATABASE_URL="postgres://..."       # Prisma Accelerate / pooled URL
POSTGRES_URL="postgres://..."              # direct/non-pooled connection
LOGIN="super-secret-admin-password"        # required by /api/admin/login
```

Then boot the dev server:

```bash
npm run dev
# visit http://localhost:3000
```

## Admin Panel

- URL: `/admin`
- Auth flow: call `/api/admin/login` with `{ password: process.env.LOGIN }`
- Successful logins are cached in `sessionStorage` (`admin_authenticated` flag)
- Update or rotate the password by changing the `LOGIN` environment variable—no code changes required

## Database & Prisma

- Schema: `prisma/schema.prisma`
- Push local schema changes: `npx prisma db push`
- Generate client: `npx prisma generate`
- Helpful scripts live in `scripts/` (e.g., `prisma-db-push.cjs` ensures URLs exist before builds)

## Project Structure

| Path | Purpose |
|------|---------|
| `src/app` | Route handlers, API endpoints, and layouts |
| `src/components` | Shared UI pieces (Hero, Footer, Cards, etc.) |
| `src/data` | Static fallback content for events and inductees |
| `src/config` | Site metadata plus color tokens |
| `prisma/` | Schema, dev database references, and seeds |
| `public/` | Images for inductees + global assets |

## NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js in development mode |
| `npm run build` | Generate Prisma client, sync schema, and produce a production build |
| `npm run start` | Serve the compiled app |
| `npm run lint` | Run ESLint |

## Deployment Notes

- Vercel is the primary target; connect the repo, set the four env vars above for every environment, and Vercel will run `npm run build`
- Any other Node host works as long as Prisma environment variables are available before build time
- The build script already runs `prisma generate` and `prisma db push`, so deploys stay in sync with the schema automatically
