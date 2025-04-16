# GitHub Pages Setup Instructions

Follow these steps to set up GitHub Pages for your repository:

1. Go to your repository on GitHub (https://github.com/adhityan924/adhityan924.github.io)
2. Click on "Settings"
3. Click on "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select "main" and "/docs" folder
6. Click "Save"

## Workflow

Every time you want to update your site:

1. Make your changes to the source code
2. Run `npm run deploy` to build the site and copy files to the docs folder
3. Commit and push your changes:
   ```
   git add .
   git commit -m "Update site"
   git push
   ```
4. Wait a few minutes for GitHub Pages to update

Your site will be available at: https://adhityan924.github.io 