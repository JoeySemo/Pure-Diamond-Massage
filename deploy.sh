#!/bin/bash

# Deployment script for Pure Diamond Massage website
# This script helps automate the deployment process to Vercel and DNS configuration

set -e

echo "🚀 Pure Diamond Massage - Deployment Script"
echo "============================================"
echo ""

# Check if vercel is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if we're logged in to Vercel
echo "📝 Step 1: Vercel Login"
vercel whoami || vercel login

echo ""
echo "🏗️  Step 2: Deploy to Vercel"
echo "Deploying to production..."
vercel --prod

echo ""
echo "🌐 Step 3: Add Custom Domain"
echo "Adding solyn.org to Vercel..."
vercel domains add solyn.org || echo "⚠️  Domain might already be added"

echo ""
echo "✅ Vercel deployment complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Update DNS records on Porkbun:"
echo "   - Delete A record: solyn.org → 216.198.79.1"
echo "   - Delete CNAME: www.solyn.org → 7f02bfc452daa99f.vercel-dns-017.com"
echo "   - Add A record: solyn.org → 76.76.21.21"
echo "   - Add CNAME: www.solyn.org → cname.vercel-dns.com"
echo ""
echo "2. Wait for DNS propagation (usually 5-30 minutes)"
echo "3. Monitor at https://www.whatsmydns.net/"
echo ""
