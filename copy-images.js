const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'public', 'images');
const outDir = path.join(__dirname, 'out', 'images');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

for (const file of fs.readdirSync(srcDir)) {
  fs.copyFileSync(path.join(srcDir, file), path.join(outDir, file));
  console.log(`✅ Copiato: ${file}`);
}
