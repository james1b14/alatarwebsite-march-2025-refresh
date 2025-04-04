// Script to convert all filenames in public directory to lowercase
const fs = require('fs');
const path = require('path');

// Function to recursively rename files to lowercase
function renameFilesToLowercase(directory) {
  const items = fs.readdirSync(directory);
  
  items.forEach(item => {
    const fullPath = path.join(directory, item);
    const stats = fs.statSync(fullPath);
    
    if (stats.isDirectory()) {
      // Process subdirectories recursively
      renameFilesToLowercase(fullPath);
    }
    
    // If the filename is not already lowercase, rename it
    if (item !== item.toLowerCase()) {
      const lowercasePath = path.join(directory, item.toLowerCase());
      console.log(`Renaming: ${fullPath} → ${lowercasePath}`);
      
      try {
        // On Windows, we might need to use a temporary name for case-only renames
        const tempPath = path.join(directory, `temp_${Date.now()}_${item}`);
        fs.renameSync(fullPath, tempPath);
        fs.renameSync(tempPath, lowercasePath);
        console.log('Success!');
      } catch (error) {
        console.error(`Error renaming ${fullPath}: ${error.message}`);
      }
    }
  });
}

// Start from the public directory
const publicDir = path.join(__dirname, 'public');
console.log(`Checking filenames in ${publicDir}...`);

try {
  renameFilesToLowercase(publicDir);
  console.log('File renaming completed!');
} catch (error) {
  console.error(`Error processing directory: ${error.message}`);
}
