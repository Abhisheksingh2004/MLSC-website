#!/bin/bash
# Build script for Render deployment

# Install dependencies
npm ci

# Run linting (optional, can be removed if it causes issues)
# npm run lint

# Build the application
npm run build

# Optional: List the contents of dist directory for debugging
echo "Build completed. Contents of dist directory:"
ls -la dist/
