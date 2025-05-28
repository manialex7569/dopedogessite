const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'bells.json');

const nfts = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

nfts.forEach(nft => {
  if (nft['Inscription ID']) {
    nft['Image'] = `https://content.nintondo.io/api/pub/content/${nft['Inscription ID']}`;
  }
});

fs.writeFileSync(filePath, JSON.stringify(nfts, null, 2), 'utf-8');

console.log('NFT image URLs updated!'); 