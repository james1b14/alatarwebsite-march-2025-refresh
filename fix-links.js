const fs = require("fs");
const path = require("path");

const DIRECTORY = "./app"; // Adjust if your folder structure is different
const FROM_PREFIX = 'href="/services/';
const TO_PREFIX = 'href="/';

function walkAndReplace(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walkAndReplace(fullPath);
    } else if (fullPath.endsWith(".tsx") || fullPath.endsWith(".ts")) {
      let content = fs.readFileSync(fullPath, "utf8");

      if (content.includes(FROM_PREFIX)) {
        const updated = content.replaceAll(FROM_PREFIX, TO_PREFIX);
        fs.writeFileSync(fullPath, updated);
        console.log(`✅ Updated: ${fullPath}`);
      }
    }
  });
}

walkAndReplace(DIRECTORY);
console.log("🎉 All links from '/services/...'' updated to root '/...'!");
