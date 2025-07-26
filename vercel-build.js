// This script is used by Vercel to build the application
const { execSync } = require('child_process');

console.log('🚀 Starting Vercel build process...');

// Install dependencies
console.log('\n🔧 Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

// Run the build
console.log('\n🏗️  Building application...');
execSync('npm run build', { stdio: 'inherit' });

console.log('\n✨ Build completed successfully!');
