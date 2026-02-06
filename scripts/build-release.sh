#!/bin/bash

# ============================================
# Wedding Website Template - Build Script
# Creates a production-ready zip for Etsy
# ============================================

set -e

echo "🎀 Building Wedding Website Template..."
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
BUILD_DIR="dist"
OUTPUT_DIR="release"
ZIP_NAME="wedding-website-template"
VERSION=$(node -p "require('./package.json').version")

# Step 1: Clean previous builds
echo -e "${YELLOW}[1/5]${NC} Cleaning previous builds..."
rm -rf $BUILD_DIR
rm -rf $OUTPUT_DIR
mkdir -p $OUTPUT_DIR

# Step 2: Install dependencies
echo -e "${YELLOW}[2/5]${NC} Installing dependencies..."
yarn install --silent

# Step 3: Run tests
echo -e "${YELLOW}[3/5]${NC} Running tests..."
yarn test:run

# Step 4: Build production version
echo -e "${YELLOW}[4/5]${NC} Building production version..."
yarn build

# Step 5: Create release package
echo -e "${YELLOW}[5/5]${NC} Creating release package..."

# Create temp directory for zip contents
TEMP_DIR="$OUTPUT_DIR/temp"
mkdir -p $TEMP_DIR

# Copy source files (for customization)
mkdir -p $TEMP_DIR/src
cp -r src/App.jsx $TEMP_DIR/src/
cp -r src/Inspiration.jsx $TEMP_DIR/src/
cp -r src/Main.jsx $TEMP_DIR/src/
cp -r src/Index.css $TEMP_DIR/src/
cp -r src/config $TEMP_DIR/src/
cp -r src/context $TEMP_DIR/src/
cp -r src/components $TEMP_DIR/src/
cp -r src/lib $TEMP_DIR/src/

# Copy config files
cp package.json $TEMP_DIR/
cp tailwind.config.js $TEMP_DIR/
cp postcss.config.js $TEMP_DIR/
cp vite.config.js $TEMP_DIR/
cp vitest.config.js $TEMP_DIR/
cp index.html $TEMP_DIR/

# Copy production build
cp -r $BUILD_DIR $TEMP_DIR/dist

# Copy documentation
cp README.md $TEMP_DIR/
cp CUSTOMIZATION.md $TEMP_DIR/

# Create zip file
cd $OUTPUT_DIR/temp
zip -r ../${ZIP_NAME}-v${VERSION}.zip .
cd ../..

# Cleanup temp
rm -rf $TEMP_DIR

echo ""
echo -e "${GREEN}✅ Build complete!${NC}"
echo ""
echo "📦 Package created: $OUTPUT_DIR/${ZIP_NAME}-v${VERSION}.zip"
echo ""
echo "Package contents:"
echo "  - /src           Source code for customization"
echo "  - /dist          Production-ready website"
echo "  - README.md      Getting started guide"
echo "  - CUSTOMIZATION.md  Detailed customization guide"
echo ""
