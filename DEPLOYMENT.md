# 🚀 Deployment Checklist

Follow these steps to complete the deployment of Pure Diamond Massage website to solyn.org.

## ✅ Already Completed

- [x] Built Next.js website with all pages
- [x] Created premium design with glassmorphism effects  
- [x] Implemented SEO optimization
- [x] Generated logo and hero images
- [x] Created responsive navigation
- [x] Built contact form with mailto
- [x] Verified production build
- [x] Initialized git repository
- [x] Created deployment scripts
- [x] Installed Vercel CLI

## 🔄 Action Required

### 1. GitHub Repository Setup

```bash
# Login to GitHub and create a new repository
# Repository details:
#   Owner: JoeySemo
#   Name: Pure-Diamond-Massage
#   Visibility: Public

# Then run:
cd "/Users/josephknittel/Pure Diamond Massage"
git remote add origin https://github.com/JoeySemo/Pure-Diamond-Massage.git
git branch -M main
git push -u origin main
```

**Or use the GitHub web interface:**
1. Go to [https://github.com/new](https://github.com/new)
2. Set repository name: `Pure-Diamond-Massage`
3. Make it Public
4. Click "Create repository"
5. Follow the "push an existing repository" instructions

---

### 2. Vercel Deployment

**Option A: Using the deployment script (Recommended)**

```bash
cd "/Users/josephknittel/Pure Diamond Massage"
./deploy.sh
```

**Option B: Manual deployment**

```bash
cd "/Users/josephknittel/Pure Diamond Massage"
vercel login          # Opens browser for authentication
vercel --prod         # Deploy to production
vercel domains add solyn.org
```

During deployment:
- Select scope: `joseph-knittels-projects`
- Confirm project settings
- Wait for build to complete

---

### 3. Porkbun DNS Configuration

> [!WARNING]
> **API Credentials Required**: You mentioned the Porkbun API key is in a picture, but I didn't see it in the uploaded image. Please provide:
> - Porkbun API Key
> - Porkbun Secret API Key

**Option A: Automated (when you have API credentials)**

```bash
cd "/Users/josephknittel/Pure Diamond Massage"
node porkbun-dns.js YOUR_API_KEY YOUR_SECRET_KEY
```

**Option B: Manual via Porkbun Dashboard**

1. Login to [Porkbun DNS Management](https://porkbun.com/account/domainsSpeedy)
2. Select domain: `solyn.org`
3. **Delete these records:**
   - A record: `solyn.org` pointing to `216.198.79.1`
   - CNAME: `www.solyn.org` pointing to `7f02bfc452daa99f.vercel-dns-017.com`
4. **Add these records:**
   - Type: `A`, Host: `@` (or blank), Answer: `76.76.21.21`, TTL: `600`
   - Type: `CNAME`, Host: `www`, Answer: `cname.vercel-dns.com`, TTL: `600`
5. Save changes

---

### 4. Verification

#### Check DNS Propagation
```bash
# Check if DNS has propagated
dig solyn.org          # Should return 76.76.21.21
dig www.solyn.org      # Should return CNAME to vercel
```

Or use browser: [https://www.whatsmydns.net/](https://www.whatsmydns.net/)

#### Test Website
- Visit [https://solyn.org](https://solyn.org)
- Visit [https://www.solyn.org](https://www.solyn.org)
- Test all pages (Home, Services, About, Contact)
- Test navigation menu
- Test contact form
- Check mobile responsive design
- Verify SSL certificate (should be green padlock)

---

## 📋 Quick Command Reference

```bash
# Local development
npm run dev           # Start dev server (now on port 3001)

# Production build
npm run build         # Build for production
npm start             # Run production server locally

# Deployment
./deploy.sh           # Deploy to Vercel

# DNS automation
node porkbun-dns.js <api-key> <secret-key>

# Git operations
git add .
git commit -m "Your message"
git push
```

---

## 🆘 Troubleshooting

**Port 3000 in use:**
- Dev server is running on [http://localhost:3001](http://localhost:3001) instead

**Vercel login issues:**
- Make sure to complete browser authentication
- Check that you're logged into the correct Vercel account

**DNS not propagating:**
- Wait 5-30 minutes for DNS changes to propagate globally
- Clear your browser cache
- Try a different DNS server or incognito mode

**SSL certificate not working:**
- Vercel auto-provisions SSL after DNS is verified
- Can take up to 24 hours (usually 10-30 minutes)
- Check Vercel dashboard for certificate status

---

## 📞 Need Porkbun API Credentials?

To get your Porkbun API credentials:

1. Login to [Porkbun](https://porkbun.com/account/api)
2. Go to Account → API Access
3. Enable API access for your domain
4. You'll receive:
   - API Key
   - Secret API Key
5. Use these with the `porkbun-dns.js` script

---

## ✨ Post-Deployment Tasks

After the website is live:

- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Add Facebook page link to footer
- [ ] Test contact form submissions
- [ ] Share website link on Facebook
- [ ] Set up website monitoring (e.g., UptimeRobot)
- [ ] Configure email forwarding for massagebydiamond@yahoo.com
- [ ] Consider adding online booking integration
