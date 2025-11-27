# Ward Website - Quick Start Guide

## For New Ward Deployments

### Automated Deployment (Recommended)

```bash
# Clone the repository
git clone https://github.com/AONIQQ/63rdward.git new-ward-name
cd new-ward-name

# Run the automated deployment script
./deploy-ward.sh
```

The script will:
1. ✅ Prompt for ward information
2. ✅ Let you choose a color theme
3. ✅ Update all configuration files
4. ✅ Push to your GitHub repository
5. ✅ Deploy to Vercel

After the script completes, follow the displayed instructions to add the database.

### Manual Deployment

See [REPLICATION_GUIDE.md](./REPLICATION_GUIDE.md) for detailed step-by-step instructions.

## Color Themes

Choose from pre-configured themes or create your own in `src/config/theme.ts`:

1. **Navy & Gold** (Default - 63rd Ward)
2. **Forest Green & Cream**
3. **Deep Purple & Coral**
4. **Burgundy & Champagne**
5. **Teal & Amber**
6. **Charcoal & Mint**

### Custom Colors

Edit `src/config/theme.ts`:

```typescript
export const themeConfig = {
  primary: {
    hue: 220,        // 0-360: Color wheel position
    saturation: 80,  // 0-100: Color intensity
    lightness: 20,   // 0-100: Brightness
  },
  accent: {
    hue: 45,         // Complementary color
    saturation: 75,
    lightness: 50,
  },
};
```

Changes apply site-wide automatically!

## Configuration Files

| File | Purpose |
|------|---------|
| `src/config/site.ts` | Ward name, contact info, content |
| `src/config/theme.ts` | Color scheme |
| `src/app/api/events/route.ts` | Admin password |

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Admin Panel

- URL: `/admin`
- Password: `philly63`
- Change password in `src/app/api/events/route.ts` line 26

## Tech Stack

- **Framework**: Next.js 16
- **Database**: Prisma Postgres
- **Hosting**: Vercel
- **Forms**: FormSubmit.co
- **Styling**: Tailwind CSS v4

## Support

- **Deployment Guide**: See `REPLICATION_GUIDE.md`
- **Database Setup**: See `VERCEL_DEPLOYMENT.md`
- **Issues**: Check Vercel logs

## Quick Commands

```bash
# Deploy to production
vercel --prod

# Pull environment variables
vercel env pull

# Update database schema
DATABASE_URL="your-url" npx prisma db push

# View logs
vercel logs
```

## Estimated Time

- **Automated**: ~15 minutes
- **Manual**: ~35 minutes

---

**Live Example**: https://ne-philly-63rd-ward.vercel.app
