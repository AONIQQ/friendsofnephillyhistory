# Vercel Deployment Guide

## Prerequisites
- GitHub account
- Vercel account (free tier)
- Code pushed to GitHub repository

## Step 1: Prepare for Deployment

### Update Email for Form Submissions
1. Open `src/config/site.ts`
2. Update `formSubmitEmail` with your actual email address:
   \`\`\`typescript
   contact: {
       formSubmitEmail: "your-actual-email@example.com",
   }
   \`\`\`

### Verify Database Configuration
The Prisma schema is already configured for PostgreSQL. No changes needed!

## Step 2: Deploy to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   \`\`\`

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy" (use default settings)

3. **Add Vercel Postgres**
   - In your Vercel project dashboard, go to "Storage" tab
   - Click "Create Database"
   - Select "Postgres"
   - Click "Create"
   - Vercel automatically adds these environment variables:
     - `POSTGRES_URL`
     - `POSTGRES_PRISMA_URL` ← This is what we use
     - `POSTGRES_URL_NON_POOLING`

4. **Connect Database to Project**
   - Go to "Settings" → "Environment Variables"
   - Add new variable:
     - Name: `DATABASE_URL`
     - Value: Click "Insert" → Select `POSTGRES_PRISMA_URL`
   - Click "Save"

5. **Redeploy to Apply Database**
   - Go to "Deployments" tab
   - Click "..." on latest deployment
   - Click "Redeploy"
   - Check "Use existing Build Cache" ✓
   - Click "Redeploy"

### Option B: Via Vercel CLI

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: ne-philly-63rd-ward
# - Directory: ./
# - Override settings? No

# Add Vercel Postgres via dashboard (see Option A, step 3-4)

# Deploy to production
vercel --prod
\`\`\`

## Step 3: Run Database Migration

After deployment with database connected:

1. **Via Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Functions"
   - Add build command override:
     \`\`\`bash
     prisma generate && prisma migrate deploy && next build
     \`\`\`
   - Redeploy

2. **Or manually via CLI**
   \`\`\`bash
   # Set DATABASE_URL from Vercel dashboard
   export DATABASE_URL="your-postgres-url-from-vercel"
   
   # Run migration
   npx prisma migrate deploy
   \`\`\`

## Step 4: Verify Deployment

1. **Test the site**
   - Visit your Vercel URL (e.g., `your-project.vercel.app`)
   - Navigate to `/admin`
   - Login with password: `philly63`
   - Add a test event
   - Verify it appears on `/calendar`

2. **Test form submission**
   - Go to `/join`
   - Fill out the signup form
   - Submit
   - Check your email for the submission

3. **First-time FormSubmit.co setup**
   - The first form submission will send a confirmation email
   - Click the confirmation link to activate
   - Future submissions will go directly to your inbox

## Step 5: Custom Domain (Optional)

1. Go to "Settings" → "Domains"
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (5-10 minutes)

## Replication Workflow for Other Wards

For each new ward site:

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/ne-philly-63rd-ward.git new-ward-name
   cd new-ward-name
   \`\`\`

2. **Update configuration**
   - Edit `src/config/site.ts`:
     - Change `name`, `location`, `description`
     - Update `contact.email` and `contact.formSubmitEmail`
     - Update `hero`, `mission`, `priorities`, `values`

3. **Create new GitHub repo**
   \`\`\`bash
   git remote set-url origin https://github.com/your-username/new-ward-name.git
   git push -u origin main
   \`\`\`

4. **Deploy to Vercel**
   - Import new GitHub repo to Vercel
   - Add Vercel Postgres database
   - Set `DATABASE_URL` environment variable
   - Deploy!

5. **Done!** New ward site is live with its own database

## Environment Variables Summary

| Variable | Value | Where to Set |
|----------|-------|--------------|
| `DATABASE_URL` | `${POSTGRES_PRISMA_URL}` | Vercel Dashboard → Settings → Environment Variables |

## Troubleshooting

**Issue**: Build fails with "Table does not exist"
**Solution**: Make sure `DATABASE_URL` is set and redeploy

**Issue**: Form submissions not received
**Solution**: Check spam folder, verify email in `site.ts`, confirm FormSubmit.co activation

**Issue**: Admin panel shows "Failed to fetch events"
**Solution**: Check Vercel logs, verify database migration ran successfully

## Cost Breakdown

- **Vercel Hosting**: Free (Hobby plan)
- **Vercel Postgres**: Free tier (256 MB storage, 60 hours compute/month)
- **FormSubmit.co**: Free (unlimited submissions)
- **Custom Domain**: ~$12/year (optional)

**Total monthly cost**: $0 (free tier covers small ward sites)

## Support

For issues:
1. Check Vercel deployment logs
2. Review Prisma migration status
3. Test database connection in Vercel dashboard
