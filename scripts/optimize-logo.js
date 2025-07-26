import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory name in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const inputPath = path.join(__dirname, '..', 'public', 'images', 'logos', 'logo.png');
const outputPath = path.join(__dirname, '..', 'public', 'images', 'logos', 'logo-optimized.png');

// Optimization settings
const OPTIMIZE_SETTINGS = {
  quality: 80,          // Quality (1-100)
  compressionLevel: 9,   // Compression level (0-9, 9 is highest compression)
  effort: 8,            // CPU effort (1-10, higher is slower but better compression)
  palette: true,        // Quantize to a palette-based image with alpha transparency support
};

async function optimizeLogo() {
  try {
    console.log('🚀 Starting logo optimization...');
    
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      throw new Error(`Input file not found: ${inputPath}`);
    }

    // Get original file stats
    const originalStats = fs.statSync(inputPath);
    console.log(`📊 Original size: ${(originalStats.size / 1024).toFixed(2)} KB`);

    // Optimize the image
    await sharp(inputPath)
      .resize(400) // Resize to a reasonable width while maintaining aspect ratio
      .png(OPTIMIZE_SETTINGS)
      .toFile(outputPath);

    // Get optimized file stats
    const optimizedStats = fs.statSync(outputPath);
    const savings = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(2);
    
    console.log(`✨ Optimized size: ${(optimizedStats.size / 1024).toFixed(2)} KB`);
    console.log(`💾 Space saved: ${savings}%`);
    
    // Replace original with optimized version
    fs.renameSync(outputPath, inputPath);
    console.log('✅ Logo optimized successfully!');
    
  } catch (error) {
    console.error('❌ Error optimizing logo:', error.message);
    process.exit(1);
  }
}

// Run the optimization
optimizeLogo();
