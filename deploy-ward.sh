#!/bin/bash

# Ward Website Deployment Script
# This script automates the deployment of a new ward website

set -e  # Exit on error

echo "🏛️  Ward Website Deployment Script"
echo "=================================="
echo ""

# Check if required tools are installed
command -v git >/dev/null 2>&1 || { echo "❌ Error: git is not installed"; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "❌ Error: npm is not installed"; exit 1; }
command -v vercel >/dev/null 2>&1 || { echo "❌ Error: vercel CLI is not installed. Run: npm i -g vercel"; exit 1; }

# Get ward information
read -p "Ward name (e.g., 45th Ward): " WARD_NAME
read -p "Location (e.g., South Philadelphia): " LOCATION
read -p "Contact email: " CONTACT_EMAIL
read -p "Form submission email: " FORM_EMAIL
read -p "GitHub repository URL (e.g., https://github.com/username/repo.git): " GITHUB_URL

echo ""
echo "📝 Configuration:"
echo "  Ward: $WARD_NAME"
echo "  Location: $LOCATION"
echo "  Contact: $CONTACT_EMAIL"
echo "  Forms: $FORM_EMAIL"
echo "  GitHub: $GITHUB_URL"
echo ""
read -p "Continue? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Cancelled."
    exit 1
fi

echo ""
echo "🎨 Choose a color theme:"
echo "  1) Navy & Gold (Default)"
echo "  2) Forest Green & Cream"
echo "  3) Deep Purple & Coral"
echo "  4) Burgundy & Champagne"
echo "  5) Teal & Amber"
echo "  6) Charcoal & Mint"
read -p "Select theme (1-6): " THEME_CHOICE

# Set theme colors based on choice
case $THEME_CHOICE in
    1)
        PRIMARY_HUE=220
        PRIMARY_SAT=80
        PRIMARY_LIGHT=20
        ACCENT_HUE=45
        ACCENT_SAT=75
        ACCENT_LIGHT=50
        ;;
    2)
        PRIMARY_HUE=140
        PRIMARY_SAT=60
        PRIMARY_LIGHT=25
        ACCENT_HUE=40
        ACCENT_SAT=40
        ACCENT_LIGHT=70
        ;;
    3)
        PRIMARY_HUE=280
        PRIMARY_SAT=70
        PRIMARY_LIGHT=25
        ACCENT_HUE=15
        ACCENT_SAT=80
        ACCENT_LIGHT=60
        ;;
    4)
        PRIMARY_HUE=350
        PRIMARY_SAT=65
        PRIMARY_LIGHT=30
        ACCENT_HUE=50
        ACCENT_SAT=50
        ACCENT_LIGHT=75
        ;;
    5)
        PRIMARY_HUE=180
        PRIMARY_SAT=70
        PRIMARY_LIGHT=30
        ACCENT_HUE=35
        ACCENT_SAT=85
        ACCENT_LIGHT=55
        ;;
    6)
        PRIMARY_HUE=200
        PRIMARY_SAT=10
        PRIMARY_LIGHT=25
        ACCENT_HUE=160
        ACCENT_SAT=60
        ACCENT_LIGHT=65
        ;;
    *)
        echo "Invalid choice, using default theme"
        PRIMARY_HUE=220
        PRIMARY_SAT=80
        PRIMARY_LIGHT=20
        ACCENT_HUE=45
        ACCENT_SAT=75
        ACCENT_LIGHT=50
        ;;
esac

echo ""
echo "⚙️  Step 1: Updating configuration files..."

# Update site.ts
sed -i.bak "s/name: \".*\"/name: \"$WARD_NAME\"/" src/config/site.ts
sed -i.bak "s/location: \".*\"/location: \"$LOCATION\"/" src/config/site.ts
sed -i.bak "s/email: \".*\"/email: \"$CONTACT_EMAIL\"/" src/config/site.ts
sed -i.bak "s/formSubmitEmail: \".*\"/formSubmitEmail: \"$FORM_EMAIL\"/" src/config/site.ts

# Update theme.ts
cat > src/config/theme.ts << EOF
export const themeConfig = {
  primary: {
    hue: $PRIMARY_HUE,
    saturation: $PRIMARY_SAT,
    lightness: $PRIMARY_LIGHT,
  },
  accent: {
    hue: $ACCENT_HUE,
    saturation: $ACCENT_SAT,
    lightness: $ACCENT_LIGHT,
  },
  get colors() {
    return {
      'primary-900': \`hsl(\${this.primary.hue}, \${this.primary.saturation}%, \${this.primary.lightness - 5}%)\`,
      'primary-800': \`hsl(\${this.primary.hue}, \${this.primary.saturation}%, \${this.primary.lightness}%)\`,
      'primary-700': \`hsl(\${this.primary.hue}, \${this.primary.saturation - 10}%, \${this.primary.lightness + 10}%)\`,
      'primary-600': \`hsl(\${this.primary.hue}, \${this.primary.saturation - 20}%, \${this.primary.lightness + 20}%)\`,
      'accent-500': \`hsl(\${this.accent.hue}, \${this.accent.saturation}%, \${this.accent.lightness}%)\`,
      'accent-400': \`hsl(\${this.accent.hue}, \${this.accent.saturation}%, \${this.accent.lightness + 10}%)\`,
      'accent-300': \`hsl(\${this.accent.hue}, \${this.accent.saturation - 10}%, \${this.accent.lightness + 20}%)\`,
    };
  },
};
EOF

# Update globals.css with new colors
PRIMARY_900="hsl($PRIMARY_HUE, $PRIMARY_SAT%, $((PRIMARY_LIGHT - 5))%)"
PRIMARY_800="hsl($PRIMARY_HUE, $PRIMARY_SAT%, ${PRIMARY_LIGHT}%)"
PRIMARY_700="hsl($PRIMARY_HUE, $((PRIMARY_SAT - 10))%, $((PRIMARY_LIGHT + 10))%)"
PRIMARY_600="hsl($PRIMARY_HUE, $((PRIMARY_SAT - 20))%, $((PRIMARY_LIGHT + 20))%)"
ACCENT_500="hsl($ACCENT_HUE, $ACCENT_SAT%, ${ACCENT_LIGHT}%)"
ACCENT_400="hsl($ACCENT_HUE, $ACCENT_SAT%, $((ACCENT_LIGHT + 10))%)"
ACCENT_300="hsl($ACCENT_HUE, $((ACCENT_SAT - 10))%, $((ACCENT_LIGHT + 20))%)"

sed -i.bak "s/--color-primary-900: .*/--color-primary-900: $PRIMARY_900;/" src/app/globals.css
sed -i.bak "s/--color-primary-800: .*/--color-primary-800: $PRIMARY_800;/" src/app/globals.css
sed -i.bak "s/--color-primary-700: .*/--color-primary-700: $PRIMARY_700;/" src/app/globals.css
sed -i.bak "s/--color-primary-600: .*/--color-primary-600: $PRIMARY_600;/" src/app/globals.css
sed -i.bak "s/--color-accent-500: .*/--color-accent-500: $ACCENT_500;/" src/app/globals.css
sed -i.bak "s/--color-accent-400: .*/--color-accent-400: $ACCENT_400;/" src/app/globals.css
sed -i.bak "s/--color-accent-300: .*/--color-accent-300: $ACCENT_300;/" src/app/globals.css

# Clean up backup files
rm -f src/config/site.ts.bak src/config/theme.ts.bak src/app/globals.css.bak

echo "✅ Configuration updated"

echo ""
echo "📦 Step 2: Setting up Git repository..."

# Initialize git if not already
if [ ! -d .git ]; then
    git init
fi

git remote remove origin 2>/dev/null || true
git remote add origin "$GITHUB_URL"
git add .
git commit -m "Initial commit: $WARD_NAME website"
git branch -M main

echo "✅ Git repository configured"

echo ""
echo "🚀 Step 3: Pushing to GitHub..."
git push -u origin main --force

echo "✅ Code pushed to GitHub"

echo ""
echo "☁️  Step 4: Deploying to Vercel..."

# Login to Vercel
vercel login

# Link and deploy
vercel link --yes
vercel --prod

echo ""
echo "✅ Initial deployment complete!"
echo ""
echo "⚠️  IMPORTANT: Next steps to complete setup:"
echo ""
echo "1. Add Prisma Postgres database:"
echo "   - Go to your Vercel dashboard"
echo "   - Click 'Storage' → 'Create Database' → 'Postgres'"
echo "   - Select all environments (Development, Preview, Production)"
echo ""
echo "2. Pull database configuration:"
echo "   vercel env pull .env.development.local"
echo ""
echo "3. Initialize database schema:"
echo "   DATABASE_URL=\"\$(grep PRISMA_DATABASE_URL .env.development.local | cut -d'=' -f2-)\" npx prisma db push"
echo ""
echo "4. Redeploy with database:"
echo "   vercel --prod"
echo ""
echo "5. Test your site:"
echo "   - Visit your Vercel URL"
echo "   - Test admin panel at /admin (password: philly63)"
echo "   - Add a test event"
echo "   - Verify it appears on /calendar"
echo ""
echo "🎉 Deployment script complete!"
