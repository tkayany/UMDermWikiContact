#!/bin/bash

echo "Building the project..."

# Compile TypeScript
echo "Compiling TypeScript..."
tsc

# Copy index.html to dist directory
echo "Copying index.html to dist directory..."
cp index.html dist/

echo "Build complete! The project is ready for deployment."
echo ""
echo "Files in dist directory:"
ls -la dist/