#!/bin/bash

# Download inductee images from Wikimedia Commons and other sources
cd "$(dirname "$0")/../public/inductees"

echo "Downloading inductee images..."

# Class of 2016
echo "Class of 2016..."
curl -L "https://upload.wikimedia.org/wikipedia/commons/8/8a/Al_schmidt_1943.jpg" -o "Al-Schmid.jpg"
curl -L "https://upload.wikimedia.org/wikipedia/commons/f/f9/Robert_Purvis%2C_Abolitionist.jpg" -o "Robert-Purvis.jpg"

# Class of 2012
echo "Class of 2012..."
curl -L "https://upload.wikimedia.org/wikipedia/commons/d/d3/Commodore_Stephen_Decatur%2C_Jr.jpg" -o "Stephen-Decatur-Jr.jpg"
curl -L "https://upload.wikimedia.org/wikipedia/commons/5/5f/Frank_Shuman.jpg" -o "Frank-Shuman.jpg"
curl -L "https://upload.wikimedia.org/wikipedia/commons/a/a0/Christopher_Ferguson_in_2018.jpg" -o "Chris-Ferguson.jpg"
curl -L "https://upload.wikimedia.org/wikipedia/commons/5/5c/Virginia_Knauer.jpg" -o "Virginia-Knauer.jpg"

# Class of 2010
echo "Class of 2010..."
curl -L "https://upload.wikimedia.org/wikipedia/commons/f/ff/Benjamin_Rush_Painting_by_Peale_1783.jpg" -o "Benjamin-Rush.jpg"

# Class of 2009
echo "Class of 2009..."
curl -L "https://upload.wikimedia.org/wikipedia/commons/5/5a/Joan_Krajewski_2011.jpg" -o "Joan-Krajewski.jpg"
curl -L "https://upload.wikimedia.org/wikipedia/commons/e/e4/Tom_Gola.jpeg" -o "Tom-Gola.jpg"
curl -L "https://upload.wikimedia.org/wikipedia/commons/f/f3/Saint_Katharine_Drexel.jpg" -o "Katharine-Drexel.jpg"

echo ""
echo "Download complete! Downloaded images:"
ls -lh *.jpg *.jpeg 2>/dev/null | awk '{print $9, "-", $5}'
