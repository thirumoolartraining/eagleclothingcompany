import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory name in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base directory for product images
const baseDir = path.join(__dirname, '..', 'public', 'images', 'products');

// List of product folders
const productFolders = [
  'corporate-polo-shirts',
  'industrial-work-t-shirts',
  'executive-button-down-shirts',
  'security-uniforms',
  'custom-hoodies',
  'work-jackets'
];

// Function to remove files in a directory
const removeFilesInDir = (dir) => {
  try {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      // Only remove files, not directories
      if (fs.statSync(filePath).isFile()) {
        fs.unlinkSync(filePath);
        console.log(`  Removed: ${path.relative(process.cwd(), filePath)}`);
      }
    });
    
    return true;
  } catch (error) {
    console.error(`Error cleaning directory ${dir}:`, error);
    return false;
  }
};

// Main function to clean all product folders
const cleanProductFolders = () => {
  console.log('Cleaning product image folders...\n');
  
  let success = true;
  
  // Process each product folder
  productFolders.forEach(folder => {
    const folderPath = path.join(baseDir, folder);
    
    if (fs.existsSync(folderPath)) {
      console.log(`Cleaning folder: ${folder}`);
      if (!removeFilesInDir(folderPath)) {
        success = false;
      }
    } else {
      console.log(`Folder does not exist: ${folderPath}`);
    }
  });
  
  if (success) {
    console.log('\n✅ All product folders have been cleaned successfully!');
    console.log('📁 You can now add your PNG product images to these folders.');
  } else {
    console.log('\n⚠️ Some folders could not be cleaned. Please check the errors above.');
  }
};

// Run the script
cleanProductFolders();
