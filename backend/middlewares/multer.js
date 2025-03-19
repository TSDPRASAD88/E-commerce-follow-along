// const multer=require("multer");




// const storage1 = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null,__dirname, '../userImages')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
//   })
  
//   const uploadUSerImage = multer({ storage: storage1 })

//   module.exports=uploadUSerImage;

const multer = require('multer');
const path = require('path');

// Storage configuration for user images
const userImageStore = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../uploads/userImages')); // Fix path
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Fix function
    }
});

// Storage configuration for product images
const productImageStore = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../uploads/productImages')); // Fix path
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Fix function
    }
});

// File upload limits and filters
const userImage = multer({
    storage: userImageStore,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
      const extension = path.extname(file.originalname).toLowerCase().replace('.', ''); // Fix extension check
      const mimeType = file.mimetype; // Fix mimetype typo

      const allowedExtensions = { jpg: true, png: true, jpeg: true };
      const allowedMimeTypes = { 'image/jpg': true, 'image/png': true, 'image/jpeg': true };

      if (!allowedExtensions[extension] && !allowedMimeTypes[mimeType]) {
        cb(new Error('File extension not allowed'));
      } else {
        cb(null, true);
      }
    }
});

// Upload configuration for product images
const productImage = multer({
  storage: productImageStore,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase().replace('.', ''); // Fix extension check
    const mimeType = file.mimetype; // Fix mimetype typo

    const allowedExtensions = { jpg: true, png: true, jpeg: true };
    const allowedMimeTypes = { 'image/jpg': true, 'image/png': true, 'image/jpeg': true };

    if (!allowedExtensions[extension] && !allowedMimeTypes[mimeType]) {
      cb(new Error('File extension not allowed'));
    } else {
      cb(null, true);
    }
  }
});

// Export the upload handlers
module.exports = { userImage, productImage };
  