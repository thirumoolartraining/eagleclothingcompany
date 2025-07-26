import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory name in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base directory for logos
const logosDir = path.join(__dirname, '..', 'public', 'images', 'logos');

// Logo files to create with their recommended dimensions
const logoFiles = [
  { name: 'logo.png', description: 'Main logo (180x50px recommended)' },
  { name: 'logo@2x.png', description: 'Retina display logo (2x size)' },
  { name: 'favicon.ico', description: 'Browser tab icon (32x32px)' },
  { name: 'apple-touch-icon.png', description: 'iOS homescreen icon (180x180px)' },
  { name: 'logo-white.png', description: 'White version for dark backgrounds' },
  { name: 'logo-black.png', description: 'Black version for light backgrounds' },
];

// Create directory if it doesn't exist
const createDirIfNotExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${path.relative(process.cwd(), dir)}`);
    return true;
  }
  return false;
};

// Create placeholder files
const createPlaceholderFiles = (dir) => {
  console.log('\nCreating placeholder logo files:');
  console.log('--------------------------------');
  
  logoFiles.forEach(file => {
    const filePath = path.join(dir, file.name);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '');
      console.log(`✓ ${file.name.padEnd(20)} - ${file.description}`);
    } else {
      console.log(`⏩ ${file.name.padEnd(20)} - Already exists`);
    }
  });
};

// Main function
const setupLogos = () => {
  try {
    console.log('Setting up logos directory...');
    
    // Create necessary parent directories
    createDirIfNotExists(path.join(__dirname, '..', 'public'));
    createDirIfNotExists(path.join(__dirname, '..', 'public', 'images'));
    
    // Create logos directory
    const created = createDirIfNotExists(logosDir);
    
    // Create placeholder files
    createPlaceholderFiles(logosDir);
    
    console.log('\n✅ Logo directory structure created successfully!');
    console.log('📁 Location:', path.relative(process.cwd(), logosDir));
    console.log('\nNext steps:');
    console.log('1. Replace the placeholder files with your actual logo files');
    console.log('2. Recommended sizes are in the filenames above');
    console.log('3. Update your components to reference these logo files');
    
  } catch (error) {
    console.error('❌ Error setting up logos directory:', error);
  }
};

// Run the script
setupLogos();
