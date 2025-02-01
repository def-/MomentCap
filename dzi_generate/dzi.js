const sharp = require('sharp');

sharp('final.png', {limitInputPixels: false}).webp({nearLossless:true}).tile({size: 256, overlap: 2}).toFile('/Users/deen/2023.dzi');
