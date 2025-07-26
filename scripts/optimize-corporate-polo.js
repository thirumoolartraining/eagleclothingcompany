import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory name in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const productDir = 'corporate-polo-shirts';
const dirPath = path.join(__dirname, '..', 'public', 'images', 'products', productDir);

// Optimization settings
const OPTIMIZE_SETTINGS = {
  quality: 85,          // Good balance between quality and file size
  compressionLevel: 9,   // Maximum compression
  effort: 8,            // High CPU effort for better compression
  progressive: true,    // Progressive loading for better UX
  webp: {              // Convert to WebP format
    quality: 85,
    alphaQuality: 90,
    effort: 6
  }
};

async function optimizeImages() {
  try {
    console.log(`🚀 Starting image optimization for ${productDir}...`);
    
    // Check if directory exists
    if (!fs.existsSync(dirPath)) {
      console.log(`⚠️ Directory not found: ${dirPath}`);
      return;
    }
    
    // Get all image files in the directory (excluding .webp files)
    const files = fs.readdirSync(dirPath).filter(file => 
      /\.(png|jpg|jpeg)$/i.test(file)
    );
    
    if (files.length === 0) {
      console.log('   No image files found to optimize.');
      return;
    }
    
    // Process each image
    for (const file of files) {
      const inputPath = path.join(dirPath, file);
      const ext = path.extname(file).toLowerCase();
      const name = path.basename(file, ext);
      const outputPath = path.join(dirPath, `${name}.webp`);
      
      try {
        // Get original file stats
        const originalStats = fs.statSync(inputPath);
        
        console.log(`\n🔧 Processing: ${file} (${(originalStats.size / 1024).toFixed(2)} KB)`);
        
        // Optimize the image and convert to WebP
        await sharp(inputPath)
          .resize(1200, 1500, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .webp(OPTIMIZE_SETTINGS.webp)
          .toFile(outputPath);
          
        // Get optimized file stats
        const optimizedStats = fs.statSync(outputPath);
        const savings = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(2);
        
        console.log(`   ✅ Created: ${name}.webp (${(optimizedStats.size / 1024).toFixed(2)} KB, ${savings}% smaller)`);
        
        // Optional: Remove original file after successful optimization
        // fs.unlinkSync(inputPath);
        // console.log(`   ℹ️  Removed original: ${file}`);
        
      } catch (error) {
        console.error(`   ❌ Error processing ${file}:`, error.message);
      }
    }
    
    console.log('\n✨ Image optimization complete!');
    
  } catch (error) {
    console.error('❌ Error during image optimization:', error.message);
    process.exit(1);
  }
}

// Run the optimization
optimizeImages();
