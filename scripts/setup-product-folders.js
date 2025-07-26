import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory name in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base directory for product images
const baseDir = path.join(__dirname, '..', 'public', 'images', 'products');

// List of product folders to create
const productFolders = [
  'corporate-polo-shirts',
  'industrial-work-t-shirts',
  'executive-button-down-shirts',
  'security-uniforms',
  'custom-hoodies',
  'work-jackets'
];

// Standard image files to create in each folder
const imageFiles = [
  '01-front.webp',
  '02-back.webp',
  '03-detail.webp',
  '04-variant.webp'
];

// Create base directories if they don't exist
const createDirIfNotExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
};

// Create placeholder files
const createPlaceholderFiles = (folder) => {
  imageFiles.forEach(file => {
    const filePath = path.join(folder, file);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '');
      console.log(`  Created placeholder: ${path.relative(process.cwd(), filePath)}`);
    }
  });
};

// Main function to create the structure
const createProductFolders = () => {
  try {
    console.log('Setting up product image folders...\n');
    
    // Create base directories
    createDirIfNotExists(path.join(__dirname, '..', 'public'));
    createDirIfNotExists(path.join(__dirname, '..', 'public', 'images'));
    createDirIfNotExists(baseDir);
    
    // Create product folders and placeholder files
    productFolders.forEach(folder => {
      const folderPath = path.join(baseDir, folder);
      createDirIfNotExists(folderPath);
      createPlaceholderFiles(folderPath);
    });
    
    console.log('\n✅ Folder structure created successfully!');
    console.log('📁 You can now add your product images to the following folders:');
    productFolders.forEach(folder => {
      console.log(`   - public/images/products/${folder}/`);
    });
    
  } catch (error) {
    console.error('❌ Error creating folder structure:', error);
  }
};

// Run the script
createProductFolders();
