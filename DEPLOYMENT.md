# Deployment Guide for BinaryType

## Quick Start for GitHub + Vercel

### 1. Upload to GitHub
1. Create a new repository on GitHub
2. Upload all the project files (excluding node_modules)
3. Push the code to your repository

### 2. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project" and import your GitHub repository
3. Configure these settings:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`
4. Click "Deploy"

## Alternative: Manual Archive Upload

If you prefer to download the code and upload manually:

### Files to Include
- All source code files in `client/`, `server/`, `shared/`
- Configuration files: `package.json`, `tsconfig.json`, `vite.config.ts`, etc.
- The new `vercel.json`, `README.md`, and `.gitignore` files

### Files to Exclude
- `node_modules/` (will be installed during build)
- `dist/` (generated during build)
- `.replit` and `replit.nix` (Replit-specific)
- Log files and temporary files

## Build Process

The build creates:
- `dist/public/` - Static frontend files
- `dist/index.js` - Bundled server

## Environment Variables

No environment variables are required for basic functionality. The app uses in-memory storage.

## Custom Domain (Optional)

After deployment, you can add a custom domain in Vercel's dashboard under Project Settings > Domains.

## Troubleshooting

- If build fails, check that all dependencies in package.json are correct
- Ensure TypeScript files compile without errors
- Verify that the build command produces files in the correct directories