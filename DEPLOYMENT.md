# Deployment Guide - 63rd Ward Website

## Database Configuration

### Current Setup (Development)
- **Database**: SQLite (local file at `./dev.db`)
- **ORM**: Prisma v5.22.0
- **Location**: Local file system
- **Cost**: Free (local only)

### Production Setup (Vercel)

For production deployment on Vercel, you need to switch from SQLite to a serverless-compatible database. **SQLite will NOT work on Vercel** because:
1. Vercel uses serverless functions (ephemeral, no persistent file system)
2. Each request may run on a different server instance
3. File-based databases can't be shared across instances

### Recommended: Vercel Postgres (Best for Vercel)

**Why Vercel Postgres:**
- ✅ **Free tier**: 256 MB storage, 60 hours compute/month
- ✅ **Zero configuration**: Built into Vercel dashboard
- ✅ **Automatic connection**: Environment variables auto-configured
- ✅ **Serverless-optimized**: Connection pooling built-in
- ✅ **Replicable**: Same setup for all ward sites

**Setup Steps:**

1. **Add Vercel Postgres to your project:**
   \`\`\`bash
   # In Vercel dashboard:
   # Project Settings → Storage → Create Database → Postgres
   \`\`\`

2. **Vercel automatically adds these environment variables:**
   \`\`\`
   POSTGRES_URL
   POSTGRES_PRISMA_URL  # Use this one for Prisma
   POSTGRES_URL_NON_POOLING
   \`\`\`

3. **Update `prisma/schema.prisma` for production:**
   \`\`\`prisma
   datasource db {
     provider = "postgresql"  // Changed from "sqlite"
     url      = env("DATABASE_URL")
   }
   \`\`\`

4. **Set DATABASE_URL in Vercel:**
   - Go to Project Settings → Environment Variables
   - Add: `DATABASE_URL` = `${POSTGRES_PRISMA_URL}`
   - This references the auto-created Postgres URL

5. **Run migration on deployment:**
   Add to `package.json`:
   \`\`\`json
   {
     "scripts": {
       "build": "prisma generate && prisma migrate deploy && next build"
     }
   }
   \`\`\`

### Alternative: Neon (Also Free & Easy)

**Why Neon:**
- ✅ **Generous free tier**: 512 MB storage, always free
- ✅ **Serverless Postgres**: Auto-scales to zero
- ✅ **Easy setup**: Just copy connection string
- ✅ **Replicable**: Create new database for each ward

**Setup Steps:**

1. **Create account at [neon.tech](https://neon.tech)**

2. **Create a new project** (one per ward site)

3. **Copy the connection string** from dashboard

4. **Add to Vercel environment variables:**
   \`\`\`
   DATABASE_URL=postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
   \`\`\`

5. **Update schema** (same as Vercel Postgres above)

### Cost Comparison

| Service | Free Tier | Paid (if needed) | Best For |
|---------|-----------|------------------|----------|
| **Vercel Postgres** | 256 MB, 60 hrs/month | $20/mo for more | Vercel deployments |
| **Neon** | 512 MB, unlimited compute | $19/mo for more | Multiple ward sites |
| **Supabase** | 500 MB, 2 GB transfer | $25/mo for more | Need auth/storage too |

**Recommendation**: Use **Vercel Postgres** for simplicity, or **Neon** if you plan to deploy many ward sites (you can manage all databases in one Neon account).

## Replicability for Other Wards

### Step-by-Step Replication

1. **Clone the repository**
2. **Update `src/config/site.ts`** with new ward info
3. **Deploy to Vercel** (connects to GitHub)
4. **Add Vercel Postgres** in dashboard (or create new Neon database)
5. **Environment variables are auto-configured**
6. **Done!** New ward site is live

### What Changes Per Ward
- `src/config/site.ts` - Ward name, location, mission
- Domain name in Vercel
- Database instance (each ward gets its own)

### What Stays the Same
- All code (100% reusable)
- Database schema (Prisma handles it)
- Admin password (or customize per ward)
- Deployment process

## Deployment Checklist

- [ ] Push code to GitHub
- [ ] Create Vercel project from GitHub repo
- [ ] Add Vercel Postgres database
- [ ] Verify `DATABASE_URL` environment variable is set
- [ ] Deploy (Vercel will run migrations automatically)
- [ ] Test admin panel at `yourdomain.com/admin`
- [ ] Add first event to verify database works

## Environment Variables

\`\`\`bash
# Production (Vercel)
DATABASE_URL=${POSTGRES_PRISMA_URL}  # Auto-set by Vercel Postgres

# Or if using Neon:
DATABASE_URL=postgresql://user:pass@host.neon.tech/db?sslmode=require
\`\`\`

## Troubleshooting

**Issue**: "Table does not exist" error
**Solution**: Run `npx prisma migrate deploy` or redeploy (migrations run on build)

**Issue**: "Connection pool timeout"
**Solution**: Using `POSTGRES_PRISMA_URL` (has connection pooling)

**Issue**: "Too many connections"
**Solution**: Vercel Postgres handles this automatically with pooling
