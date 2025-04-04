// Script to check and fix any remaining paths in all JavaScript and TypeScript files
const fs = require('fs');
const path = require('path');

// Function to recursively find all JS and TS files
function findAllCodeFiles(directory, fileList = []) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const fullPath = path.join(directory, file);
    const stats = fs.statSync(fullPath);
    
    if (stats.isDirectory()) {
      // Skip node_modules and .next directories
      if (file !== 'node_modules' && file !== '.next') {
        findAllCodeFiles(fullPath, fileList);
      }
    } else if (/\.(jsx?|tsx?)$/.test(file)) {
      fileList.push(fullPath);
    }
  });
  
  return fileList;
}

// Function to check and fix image paths in a file
function checkAndFixPaths(filePath) {
  console.log(`Checking ${filePath}...`);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  // Check for image paths with uppercase first letters
  const patterns = [
    { search: /\/Images\//g, replace: '/images/' },
    { search: /\/Video\//g, replace: '/video/' },
    { search: /\/Privacy\//g, replace: '/privacy/' },
    { search: /\/Logo\//g, replace: '/logo/' },
    { search: /src="(\/(?:images|video|logo)\/[^"]+)"/g, replace: (match, p1) => {
      // Keep original case as-is, as we now have the error handler script in place
      return `src="${p1}" unoptimized={true}`;
    }},
    { search: /Alatar Logistics Group Ltd Privacy Policy\.pdf/g, replace: 'alatar logistics group ltd privacy policy.pdf' }
  ];
  
  // Apply all patterns
  patterns.forEach(({ search, replace }) => {
    const updatedContent = content.replace(search, replace);
    if (updatedContent !== content) {
      changed = true;
      content = updatedContent;
    }
  });
  
  // Write changes back if needed
  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated paths in ${filePath}`);
  }
}

// Start from the current directory
const appDir = path.join(__dirname, 'app');
console.log(`Checking files in ${appDir}...`);

try {
  const codeFiles = findAllCodeFiles(appDir);
  codeFiles.forEach(checkAndFixPaths);
  console.log('Path checking and fixing completed!');
} catch (error) {
  console.error(`Error processing files: ${error.message}`);
}
