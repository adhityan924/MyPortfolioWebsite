const fs = require('fs-extra');
const path = require('path');

// Define source and destination paths
const sourceDir = path.join(__dirname, 'dist');
const destDir = path.join(__dirname, 'docs');

// Function to copy files
async function copyFiles() {
  try {
    // Make sure the destination directory exists
    await fs.ensureDir(destDir);
    
    // Clean the destination directory
    await fs.emptyDir(destDir);
    
    // Copy all files from dist to docs
    await fs.copy(sourceDir, destDir);
    
    // Create a .nojekyll file in the docs directory
    await fs.writeFile(path.join(destDir, '.nojekyll'), '');
    
    console.log('Files copied successfully from dist to docs!');
    console.log('Added .nojekyll file to prevent GitHub Pages from using Jekyll.');
    console.log('Now push to GitHub and set GitHub Pages source to "docs" folder in repository settings.');
  } catch (err) {
    console.error('Error copying files:', err);
  }
}

// Run the copy function
copyFiles(); 