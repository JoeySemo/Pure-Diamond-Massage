/**
 * Porkbun DNS Configuration Script
 * Automates DNS record updates for solyn.org to point to Vercel
 * 
 * Usage: node porkbun-dns.js <api_key> <secret_key>
 */

const https = require('https');

const API_KEY = process.argv[2];
const SECRET_KEY = process.argv[3];
const DOMAIN = 'solyn.org';

if (!API_KEY || !SECRET_KEY) {
    console.error('❌ Error: API credentials required');
    console.error('Usage: node porkbun-dns.js <api_key> <secret_key>');
    process.exit(1);
}

// Helper function to make API requests
function makeRequest(endpoint, data) {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify({
            apikey: API_KEY,
            secretapikey: SECRET_KEY,
            ...data
        });

        const options = {
            hostname: 'porkbun.com',
            port: 443,
            path: `/api/json/${endpoint}`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(postData)
            }
        };

        const req = https.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(body));
                } catch (e) {
                    reject(new Error('Invalid JSON response'));
                }
            });
        });

        req.on('error', reject);
        req.write(postData);
        req.end();
    });
}

async function main() {
    console.log('🌐 Porkbun DNS Configuration for solyn.org');
    console.log('==========================================\n');

    try {
        // Step 1: Get current DNS records
        console.log('📋 Step 1: Fetching current DNS records...');
        const currentRecords = await makeRequest(`v3/dns/retrieve/${DOMAIN}`);

        if (currentRecords.status !== 'SUCCESS') {
            throw new Error(`Failed to retrieve records: ${currentRecords.message}`);
        }

        console.log(`✅ Found ${currentRecords.records.length} existing records\n`);

        // Step 2: Delete old A and CNAME records
        console.log('🗑️  Step 2: Removing old DNS records...');

        for (const record of currentRecords.records) {
            // Delete old A record pointing to 216.198.79.1
            if (record.type === 'A' && record.name === DOMAIN && record.content === '216.198.79.1') {
                console.log(`   Deleting A record: ${record.name} → ${record.content}`);
                const deleteResult = await makeRequest(`v3/dns/delete/${DOMAIN}/${record.id}`);
                if (deleteResult.status === 'SUCCESS') {
                    console.log('   ✅ Deleted successfully');
                }
            }

            // Delete old CNAME record for www
            if (record.type === 'CNAME' && record.name === `www.${DOMAIN}` && record.content.includes('vercel-dns-017')) {
                console.log(`   Deleting CNAME record: ${record.name} → ${record.content}`);
                const deleteResult = await makeRequest(`v3/dns/delete/${DOMAIN}/${record.id}`);
                if (deleteResult.status === 'SUCCESS') {
                    console.log('   ✅ Deleted successfully');
                }
            }
        }

        console.log('');

        // Step 3: Create new A record
        console.log('➕ Step 3: Creating new A record...');
        const aRecord = await makeRequest(`v3/dns/create/${DOMAIN}`, {
            type: 'A',
            name: '',  // apex domain
            content: '76.76.21.21',
            ttl: '600'
        });

        if (aRecord.status === 'SUCCESS') {
            console.log(`✅ Created A record: ${DOMAIN} → 76.76.21.21`);
        } else {
            console.error(`❌ Failed to create A record: ${aRecord.message}`);
        }

        // Step 4: Create new CNAME record
        console.log('\n➕ Step 4: Creating new CNAME record...');
        const cnameRecord = await makeRequest(`v3/dns/create/${DOMAIN}`, {
            type: 'CNAME',
            name: 'www',
            content: 'cname.vercel-dns.com',
            ttl: '600'
        });

        if (cnameRecord.status === 'SUCCESS') {
            console.log(`✅ Created CNAME record: www.${DOMAIN} → cname.vercel-dns.com`);
        } else {
            console.error(`❌ Failed to create CNAME record: ${cnameRecord.message}`);
        }

        console.log('\n🎉 DNS configuration complete!');
        console.log('\n📝 Next Steps:');
        console.log('   1. Wait 5-30 minutes for DNS propagation');
        console.log('   2. Check propagation at https://www.whatsmydns.net/');
        console.log('   3. Verify SSL certificate is issued by Vercel');
        console.log(`   4. Visit https://${DOMAIN} to confirm\n`);

    } catch (error) {
        console.error('\n❌ Error:', error.message);
        process.exit(1);
    }
}

main();
