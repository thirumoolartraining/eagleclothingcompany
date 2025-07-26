import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory name in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the logos directory
const logosDir = path.join(__dirname, '..', 'public', 'images', 'logos');

// Function to clean the directory
const cleanLogosDir = () => {
  try {
    console.log('Cleaning logos directory...');
    
    // Check if directory exists
    if (!fs.existsSync(logosDir)) {
      console.log('Logos directory does not exist. Nothing to clean.');
      return;
    }
    
    // Read all files in the directory
    const files = fs.readdirSync(logosDir);
    
    if (files.length === 0) {
      console.log('Logos directory is already empty.');
      return;
    }
    
    // Remove each file
    console.log('Removing files:');
    console.log('----------------');
    
    files.forEach(file => {
      const filePath = path.join(logosDir, file);
      // Only remove files, not directories
      if (fs.statSync(filePath).isFile()) {
        fs.unlinkSync(filePath);
        console.log(`✓ Removed: ${file}`);
      }
    });
    
    console.log('\n✅ Logos directory has been cleaned successfully!');
    console.log('📁 You can now add your JPG logo files to:', path.relative(process.cwd(), logosDir));
    
  } catch (error) {
    console.error('❌ Error cleaning logos directory:', error);
  }
};

// Run the cleanup
cleanLogosDir();
