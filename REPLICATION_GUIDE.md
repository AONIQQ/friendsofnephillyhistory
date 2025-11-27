# Ward Website Replication Guide

This guide documents the exact process to replicate this website for other ward organizations.

## Prerequisites
- GitHub account
- Vercel account (free tier)
- Email address for form submissions

## Step 1: Clone and Customize

```bash
# Clone the repository
git clone https://github.com/AONIQQ/63rdward.git new-ward-name
cd new-ward-name

# Install dependencies
npm install
```

## Step 2: Update Configuration

Edit `src/config/site.ts`:

```typescript
export const siteConfig = {
    name: "YOUR_WARD_NAME",  // e.g., "45th Ward"
    location: "YOUR_LOCATION",  // e.g., "South Philadelphia"
    description: "YOUR_DESCRIPTION",
    contact: {
        email: "your-contact@email.com",
        formSubmitEmail: "your-actual-email@example.com",  // IMPORTANT: For form submissions
        phone: "YOUR_PHONE",
        address: "YOUR_ADDRESS",
    },
    // Update hero, mission, priorities, values sections...
}
```

## Step 3: Create New GitHub Repository

```bash
# Remove old git history
rm -rf .git

# Initialize new repository
git init
git add .
git commit -m "Initial commit: [Ward Name] website"

# Create new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel via CLI

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login
# Follow the browser authentication flow

# Link project to Vercel
vercel link --yes

# Deploy to production
vercel --prod
```

**Note**: The first deployment will fail because the database isn't connected yet. This is expected.

## Step 5: Add Prisma Postgres Database

### Via Vercel Dashboard (Required)

1. Go to your Vercel project dashboard
2. Click "Storage" tab
3. Click "Create Database"
4. Select "Postgres" (Prisma Postgres)
5. Choose a name (e.g., `your-ward-db`)
6. Select region closest to your users
7. Click "Create"

### Configure Environment Variables

Vercel automatically creates these variables:
- `DATABASE_URL`
- `POSTGRES_URL`
- `PRISMA_DATABASE_URL`

**Important**: Make sure all three environments are selected:
- ✅ Development
- ✅ Preview  
- ✅ Production

## Step 6: Pull Database Configuration Locally

```bash
# Pull environment variables from Vercel
vercel env pull .env.development.local

# This creates a local file with your database credentials
```

## Step 7: Initialize Database Schema

```bash
# Use the PRISMA_DATABASE_URL from .env.development.local
# Replace with your actual URL from the file
DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=YOUR_API_KEY" npx prisma db push
```

You should see:
```
🚀  Your database is now in sync with your Prisma schema.
```

## Step 8: Deploy with Database

```bash
# Commit any changes
git add .
git commit -m "Configure for [Ward Name]"
git push

# Deploy to production
vercel --prod
```

This time the build should succeed!

## Step 9: Test Your Deployment

### Test Homepage
Visit: `https://your-project.vercel.app`

### Test Admin Panel
1. Visit: `https://your-project.vercel.app/admin`
2. Password: `philly63` (change in `src/app/api/events/route.ts` if needed)
3. Add a test event
4. Verify it saves

### Test Calendar
1. Visit: `https://your-project.vercel.app/calendar`
2. Verify your event appears

### Test Signup Form
1. Visit: `https://your-project.vercel.app/join`
2. Fill out and submit
3. Check your email (first submission requires confirmation)
4. Click confirmation link in email
5. Future submissions will go directly to your inbox

## Step 10: Custom Domain (Optional)

1. In Vercel dashboard: Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait 5-10 minutes for propagation

## Troubleshooting

### Build Fails with "DATABASE_URL not found"
- Verify database is created in Vercel dashboard
- Check that environment variables are set for all environments
- Redeploy: `vercel --prod`

### "Table does not exist" error
- Run `npx prisma db push` locally first
- Then redeploy to Vercel

### Form submissions not received
- Verify `formSubmitEmail` in `src/config/site.ts`
- Check spam folder
- Confirm FormSubmit.co activation email was clicked

### Admin panel shows "Failed to fetch events"
- Database not connected - follow Step 5
- Check Vercel logs for errors

## Key Files to Customize

| File | What to Change |
|------|----------------|
| `src/config/site.ts` | ALL ward-specific content |
| `src/app/api/events/route.ts` | Admin password (line 26) |
| `README.md` | Project documentation |

## Cost Summary

- **Vercel Hosting**: Free (Hobby plan)
- **Prisma Postgres**: Free tier (256 MB storage)
- **FormSubmit.co**: Free (unlimited submissions)
- **Custom Domain**: ~$12/year (optional)

**Total**: $0/month for small ward sites

## Quick Reference Commands

```bash
# Local development
npm run dev

# Deploy to production
vercel --prod

# View deployment logs
vercel logs

# Pull environment variables
vercel env pull

# List deployments
vercel ls

# Push database schema
DATABASE_URL="your-url" npx prisma db push
```

## What Gets Replicated

✅ Complete website design
✅ Admin dashboard
✅ Event management system
✅ Database schema
✅ Form submission handling
✅ Responsive design
✅ SEO optimization

## What Needs Customization

📝 Ward name and location
📝 Contact information
📝 Mission statement
📝 Priorities and values
📝 Form submission email
📝 Admin password (optional)

## Estimated Time Per Ward

- Configuration: 10 minutes
- GitHub setup: 5 minutes
- Vercel deployment: 5 minutes
- Database setup: 5 minutes
- Testing: 10 minutes

**Total**: ~35 minutes per ward

## Support

For issues:
1. Check Vercel deployment logs
2. Verify environment variables are set
3. Test database connection
4. Review this guide

---

**Last Updated**: November 2025
**Tested On**: Vercel, Prisma Postgres
**Framework**: Next.js 16.0.4
