# Pure Diamond Massage Website

Professional massage therapy website for Pure Diamond Massage in Cuba, MO.

## About

Pure Diamond Massage offers personalized massage therapy services including:
- Swedish Massage
- Deep Tissue
- Myofascial Massage
- Sports Massage
- Reflexology
- Cupping

**Owner:** Diamond Payne  
**Location:** 108 Downey Place, Cuba, MO 65453  
**Phone:** (636) 300-7711  
**Email:** massagebydiamond@yahoo.com

## Technology Stack

- **Framework:** Next.js 16 (React 18)
- **Styling:** Tailwind CSS 4 + Custom CSS
- **Language:** TypeScript
- **Deployment:** Vercel
- **Domain:** purediamondmassage.com

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

## Deployment

### 1. GitHub Repository

Create a new GitHub repository at `JoeySemo/Pure-Diamond-Massage`:

```bash
# Repository is already initialized with git
# Add GitHub remote (replace with your actual repo URL)
git remote add origin https://github.com/JoeySemo/Pure-Diamond-Massage.git
git push -u origin main
```

### 2. Vercel Deployment

```bash
# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Add custom domain
vercel domains add purediamondmassage.com
```

### 3. DNS Configuration (Porkbun)

Update DNS records for `purediamondmassage.com`:

**Delete existing records pointing elsewhere (if any)**

**Add new records:**
- A record: `purediamondmassage.com` → `76.76.21.21` (Vercel)
- CNAME record: `www.purediamondmassage.com` → `cname.vercel-dns.com`

## Features

- ✅ Fully responsive design
- ✅ SEO optimized with meta tags
- ✅ Premium glassmorphism effects
- ✅ Smooth animations and transitions
- ✅ Contact form with mailto integration
- ✅ Mobile-friendly navigation
- ✅ Evidence-based content (`.antigravity/rules.md`)

## License

© 2025 Pure Diamond Massage. All rights reserved.
